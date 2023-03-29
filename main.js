let storageKey = "text";
var savedData = localStorage.getItem(storageKey);
let count =0;
// Set the saved data to the editor instance
var editor = CKEDITOR.instances.content;
editor.setData(savedData);
let data;
let para;
document.querySelector("#submit").addEventListener("click", () => {
  data = CKEDITOR.instances.content.getData();
  if(data.length==0){
        alert('Không thể tạo file do chưa có dữ liệu');
  }
  else{
  localStorage.setItem(storageKey, data);
  editor.setData('');
//   dang can nhac doan nay khong biet co nen remove item hay khong
  localStorage.removeItem(storageKey);
  count++;
  showList(count);
 
  }
});


let childElement2 =  document.querySelectorAll('div')[1];
childElement2.addEventListener('click', ()=>{
        console.log(childElement2);
}
)
function showList(numFile){
        para = document.createElement("div");
        para.innerText=data;
        para.style.marginBottom='10px';
        para.style.height='50px';
        para.style.width='10vw';
        para.style.display='flex';
        para.style.alignItems='center';
        para.style.justifyContent='center';
        para.style.backgroundColor='#457b9d'
        document.querySelector('body').appendChild(para);

}


