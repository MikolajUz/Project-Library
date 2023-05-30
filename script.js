let myLibrary=[];
const title=document.getElementById('title');
const author=document.getElementById('author')
const pages=document.getElementById('pages')
const read=document.getElementById('read');


const button=document.querySelector('button');
button.addEventListener('click',event =>{
    addBookToLibrary(new book(title.value,author.value,pages.value,read.checked))
    displayTable();
});



function book(title, author, pages, done){
    this.title=title;
    this.author=author;
    this.pages=pages;   
    this.done=done;
    
}

function addBookToLibrary(newbook){

    myLibrary.push(newbook);
  };
  
function displayTable(){
    const container=document.querySelector('#container');
    container.querySelectorAll('div').forEach(el=>el.remove());
    container.querySelectorAll('button').forEach(el=>el.remove());

    myLibrary.forEach((elem,index)=>{

        const row=document.createElement('div');
        row.classList.add('row');
        const butsec=document.createElement('div');


        const content=document.createElement('div');
        const remButton=document.createElement('button');
        const readButton=document.createElement('button');

        remButton.setAttribute('id',index);
        remButton.textContent='DELETE';
        remButton.classList.add('delbutton');
        remButton.addEventListener('click',removeBook=>{
            myLibrary.splice(index,1);
            displayTable();
        });
        if(myLibrary[index].done===true) readButton.textContent='READ';
        if(myLibrary[index].done===false) readButton.textContent='UNREAD';

        readButton.addEventListener('click',event=>{

            if(myLibrary[index].done===true){
            myLibrary[index].done=false;
            
            }
            else{
                myLibrary[index].done=true;
                
            }
            displayTable();
        });

        content.textContent = `${elem.title}, by ${elem.author}, ${elem.pages} pages read so far` ;
        
        container.appendChild(row);
        row.appendChild(content);
        row.appendChild(butsec)
        butsec.appendChild(remButton);
        butsec.appendChild(readButton);
        
    })
}









