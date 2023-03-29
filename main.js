let storageKey = "text";
var savedData = localStorage.getItem(storageKey);

// Set the saved data to the editor instance
var editor = CKEDITOR.instances.content;
editor.setData(savedData);
let data;
document.querySelector("#submit").addEventListener("click", () => {
  data = CKEDITOR.instances.content.getData();
  if(data.length==0){
        alert('Không thể tạo file do chưa có dữ liệu');
  }
  localStorage.setItem(storageKey, data);
  editor.setData('');
//   dang can nhac doan nay khong biet co nen remove item hay khong
  localStorage.removeItem(storageKey);
  
});

document.querySelector('.storageFile').addEventListener("click",()=>{
        editor.setData(data)
})
function showList(){
        document.querySelector('.storageFile').innerText = 'FILE 1';
}


