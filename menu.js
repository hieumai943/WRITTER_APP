
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+ 1;
    var day = date.getDate();

    
document.getElementById('date').innerHTML ='hieu';

function showList() {

    let localItems = JSON.parse(localStorage.getItem('storageKey'));
    let fileItems = JSON.parse(localStorage.getItem('storageFile'));
    if (localItems === null) {
        tasklist = [];
        fileList = [];
    }
    else {
        tasklist = localItems;
        fileList = fileItems;
    }
    let output = "";

    tasklist.forEach((data, index) => {
        output += `<div class="file">
        <a href="index.html#file${index}"  onclick="completed(${index})"><i class="fa fa-folder-open-o" aria-hidden="true" style="font-size:50px;"></i></a>
        <span>${fileList[index]}</span>
        <span id='date' >DATE: ${day} / ${month} / ${year}</span>
        <i id="xoa"class="fa fa-trash-o" aria-hidden="true" onclick="deleteFile(${index})" style="font-size:30px;"></i>
        </div>`;
    })
    document.querySelector(".storageFile").innerHTML = output;
}
showList();
function completed(num) {
    
    localStorage.setItem('currentFile', num);
}

function deleteFile(num) {
    tasklist.splice(num, 1);
    fileList.splice(num, 1);
    localStorage.setItem('storageKey', JSON.stringify(tasklist));
    localStorage.setItem('storageFile', JSON.stringify(fileList));
    showList();
    editor.setData('');
}
document.getElementById('addFile').addEventListener('click',()=>{
    localStorage.setItem('currentFile', 99);
   
})
window.location.hash = '#hieu';
window.addEventListener(
    "hashchange",
    () => {
        if(location.hash== '#new')
      window.location.href="index.html"
    }
  );