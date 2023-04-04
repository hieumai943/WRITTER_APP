
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
        output += `<a href='index.html' class="file"  onclick="completed(${index})"><i class="fa fa-file-o" aria-hidden="true" style="margin-right:15px"></i>${fileList[index]}<i class="trash fa fa-trash-o" aria-hidden="true" style='margin-left:30px' onclick="deleteFile(${index})"></i></a>`;
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