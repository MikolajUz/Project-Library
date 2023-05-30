

const Hobbit= new book('Hobbit', 'J.R.R. Tolkien', '300', 'finished');
const Hobbit2= new book('hobbit2', 'JRRTolkien', '300', 'finished');
const Hobbit3= new book('hobbit3', 'JRRTolkien', '300', 'finished');
let myLibrary=[Hobbit,Hobbit2];

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
    return `${title}+by+${author}+, +${pages}+ pages, +${done}`
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

        const content=document.createElement('div');
        const remButton=document.createElement('button');
        const readButton=document.createElement('button');

        remButton.setAttribute('id',index);
        remButton.addEventListener('click',removeBook=>{
            myLibrary.splice(index,1);
            displayTable();
        });

        readButton.addEventListener('click',event=>{

            if(myLibrary[index].done===true)
            {
            myLibrary[index].done=false}
            else{
                myLibrary[index].done=true
            }

            displayTable();
        });

        content.textContent = `${elem.title} ${elem.author} ${elem.pages} ${elem.done}` ;
        
        container.appendChild(row);
        row.appendChild(content);
        row.appendChild(remButton);
        row.appendChild(readButton);
        
    })
}







displayTable();

addBookToLibrary(new book('witcher','sapkowski','273','undone'));

displayTable();






/*
const container=document.querySelector('#container');
const content=document.createElement('div');
content.textContent = `${myLibrary[0].title} ${myLibrary[0].author} ${myLibrary[0].pages} ${myLibrary[0].done}` ;
container.appendChild(content);
*/

//addBookToLibrary(Hobbit3);
    
//console.table(myLibrary);

//console.table(Hobbit3);