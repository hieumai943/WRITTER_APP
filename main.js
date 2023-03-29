let storageKey ='text';
let saveFile = ['hieuuuuuuuuuuu']
 document.querySelector('#submit').addEventListener('click',() =>{
 
   
        let data= CKEDITOR.instances.content.getData();
        localStorage.setItem('editorData',data);

    console.log('submitted');
    localStorage.setItem(storageKey,saveFile);
})
