const myLibrary=[];

function Book(title,author,pages,read){
    if(!new.target)
        throw Error("new operator not used.");
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBooktoLibrary(book){
    myLibrary.push(book);
    console.log(book);
}
const b1=new Book("The Hobbit", "J.R.R. Tolkien", 295, "unread");
 addBooktoLibrary(b1);

 const b2=new Book("The Basir", "Asir", 420, "read");
 addBooktoLibrary(b2);

console.log();
console.log("Books in Library: ");
myLibrary.forEach(function(book){
    console.log(book.title);
})

const LibraryDiv=document.getElementById("library");
function displayBooks(){
    LibraryDiv.innerHTML="";
    myLibrary.forEach(function(book){
        LibraryDiv.innerHTML+=`
        <div class="book-card">
        <h2>${book.title}</h2>
        <p><strong>Author: </strong>${book.author}</p>
        <p><strong>Pages: </strong>${book.pages}</p>
        <p><strong>Status: </strong>${book.read}</p>
        ----------------------------------------<br>`;
    })
}
displayBooks();