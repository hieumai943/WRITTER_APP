
let storageKey = "text";


let inputValue;
// Set the saved data to the editor instance
var editor = CKEDITOR.instances.content;

let data;
let para;
let tasklist=[];
let fileList =[];
document.querySelector(".submit").addEventListener("click", () => {


  data = CKEDITOR.instances.content.getData();
  if (data.length == 0) {
    alert("Không thể tạo file do chưa có dữ liệu");
  } else {
    popup.style.display='block';

    tasklist.push(data);
    localStorage.setItem('storageKey',JSON.stringify(tasklist) );
    editor.setData("");
    //   dang can nhac doan nay khong biet co nen remove item hay khong
  
  }

});
document.querySelector(".open").addEventListener("click", () => {

   fileUp.style.display='block';
  

});
let popup = document.getElementById("myPopup");
let setUp = document.getElementById("setFile");
let fileUp= document.getElementById("saving");

setUp.addEventListener('click',()=>{
  inputValue = document.getElementsByClassName('inputVal')[0];
  
  let fileItems = JSON.parse(localStorage.getItem('storageFile'));
  if(fileList=== null ) {
  fileList=[];
}
 
 fileList.push(inputValue.value);

  // fileList.push(inputVal.value);
  localStorage.setItem('storageFile',JSON.stringify(fileList) );
  popup.style.display = "none";
  showList();
})



function showList() {

  let localItems = JSON.parse(localStorage.getItem('storageKey'));
  let fileItems = JSON.parse(localStorage.getItem('storageFile'));
  if(localItems=== null ) {tasklist=[];
  fileList=[];
}
  else{ tasklist= localItems;
    fileList=fileItems;
  }
  let output = "";
  
  tasklist.forEach((data,index)=>{
    output += `<span class="file"  onclick="completed(${index})"><i class="fa fa-file-o" aria-hidden="true" style="margin-right:10px"></i>${fileList[index]}<i class="fa fa-trash-o" aria-hidden="true" style='margin-left:30px' onclick="deleteFile(${index})"></i></span>`;
  })
  document.querySelector(".storageFile").innerHTML = output;
}
showList();
function completed(num) {
  editor.setData(tasklist[num]);
}

function deleteFile(num){
tasklist.splice(num,1);
fileList.splice(num,1);
localStorage.setItem('storageKey', JSON.stringify(tasklist));
localStorage.setItem('storageFile', JSON.stringify(fileList));
showList();
editor.setData('');
}
