let storageKey = "text";
var savedData = localStorage.getItem(storageKey);
let count =0;
// Set the saved data to the editor instance
var editor = CKEDITOR.instances.content;
editor.setData(savedData);
let data;
let para;
let output='';
document.querySelector("#submit").addEventListener("click", () => {
        count++;
        data = CKEDITOR.instances.content.getData();
  if(data.length==0){
        alert('Không thể tạo file do chưa có dữ liệu');
  }
  else{
  localStorage.setItem(`storageKey${count}`, data);
//   editor.setData('');
//   dang can nhac doan nay khong biet co nen remove item hay khong
//   localStorage.removeItem(storageKey);
  
  showList(count);
 
  }
});



function showList(numFile){
       
        output+=`<div class="file" style="display: flex" onclick="completed(${numFile})">File ${numFile}</div>`
        document.querySelector('.storageFile').innerHTML= output;
        
}

function completed(num){
        
       editor.setData(localStorage.getItem(`storageKey${num}`))
}

