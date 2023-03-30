
var savedData = localStorage.getItem(storageKey);
let count = 0;
// Set the saved data to the editor instance
var editor = CKEDITOR.instances.content;
editor.setData(savedData);
let data;
let para;
let tasklist=[];
document.querySelector("#submit").addEventListener("click", () => {
 
  
  
   console.log(tasklist);
  data = CKEDITOR.instances.content.getData();
  if (data.length == 0) {
    alert("Không thể tạo file do chưa có dữ liệu");
  } else {
    
    count++;
    localStorage.setItem("numFile", count);
    tasklist.push(data);
    localStorage.setItem('storageKey',JSON.stringify(tasklist) );
    editor.setData("");
    //   dang can nhac doan nay khong biet co nen remove item hay khong
    console.log(data);
    showList();
  }

});


function showList() {
  let localItems = JSON.parse(localStorage.getItem('storageKey'));
  if(localItems=== null ) tasklist=[];
  else tasklist= localItems;
  let output = "";
  
  tasklist.forEach((data,index)=>{
    output += `<span class="file"  onclick="completed(${index})"><i class="fa fa-file-o" aria-hidden="true" style="margin-right:10px"></i>${tasklist[index]}<i class="fa fa-trash-o" aria-hidden="true" style='margin-left:30px' onclick="deleteFile(${index})"></i></span>`;
  })
  document.querySelector(".storageFile").innerHTML = output;
}
showList();
function completed(num) {
  editor.setData(tasklist[num]);
}

function deleteFile(num){
tasklist.splice(num,1);
localStorage.setItem('storageKey', JSON.stringify(tasklist));
showList();
}
