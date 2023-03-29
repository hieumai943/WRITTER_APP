let storageKey = "text";
var savedData = localStorage.getItem(storageKey);
let count = 0;
// Set the saved data to the editor instance
var editor = CKEDITOR.instances.content;
editor.setData(savedData);
let data;
let para;

document.querySelector("#submit").addEventListener("click", () => {
  localStorage.setItem("numFile", count);
  data = CKEDITOR.instances.content.getData();
  if (data.length == 0) {
    alert("Không thể tạo file do chưa có dữ liệu");
  } else {
    count++;
    localStorage.setItem(`storageKey${count}`, data);
    editor.setData("");
    //   dang can nhac doan nay khong biet co nen remove item hay khong

    showList(count);
  }
});
showList(localStorage.getItem("numFile"));

function showList(numFile) {
  let output = "";
  for (let i = 1; i <= numFile; i++) {
    output += `<span class="file"  onclick="completed(${i})"><i class="fa fa-file-o" aria-hidden="true" style="margin-right:10px"></i>File ${i}</span>`;
    document.querySelector(".storageFile").innerHTML = output;
  }
}

function completed(num) {
  editor.setData(localStorage.getItem(`storageKey${num}`));
}
