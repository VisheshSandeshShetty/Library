const myLibrary=[];

function Book(title,author,pages,read){
    if(!new.target)
        throw Error("new operator not used.");
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.id=crypto.randomUUID();
}

function addBooktoLibrary(book){
    myLibrary.push(book);
    console.log(book);
}
const b1=new Book("The Hobbit", "J.R.R. Tolkien", 295, "unread");
 addBooktoLibrary(b1);
const b2 = new Book("Meditations", "Marcus Aurelius", 304, "read");
addBooktoLibrary(b2);
const b3 = new Book("Tao Te Ching", "Lao Tzu", 184, "read");
addBooktoLibrary(b3);
const b4 = new Book("Dancing with Siva", "Satguru Sivaya Subramuniyaswami", 1008, "unread");
addBooktoLibrary(b4);
const b5 = new Book("The Art of War", "Sun Tzu", 273, "read");
addBooktoLibrary(b5);
const b6 = new Book("Atomic Habits", "James Clear", 320, "unread");
addBooktoLibrary(b6);
const b7 = new Book("1984", "George Orwell", 328, "read");
addBooktoLibrary(b7);
const b8 = new Book("The Alchemist", "Paulo Coelho", 208, "unread");
addBooktoLibrary(b8);

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
        <p><strong>Status: 
            <span style="color:${book.read=="read"?"green":"red"}">
            ${book.read}</strong>
            </span>    
        </p>
        <p><strong>Book ID: </strong>${book.id}</p>
        <br>
        <button class="remove-book-btn" data-id="${book.id}">Delete</button> 
        <button class="status-btn" data-id="${book.id}">Change Status</button>
        <br>
        -----------------------------------------------------------------<br>`;
    })

    const statusBtns=document.querySelectorAll(".status-btn");
    statusBtns.forEach(function(button){
        button.addEventListener("click", function(){
            const id=button.dataset.id;
            const book=myLibrary.find(function(book){
                return book.id==id;
            })
        book.toggleRead();
        displayBooks();
        })
    })

    const deleteBtns=document.querySelectorAll(".remove-book-btn");
    deleteBtns.forEach(function(button){
        button.addEventListener("click", function(){
            const id=button.dataset.id;
            const idx=myLibrary.findIndex(function(book){
                return book.id==id;
            })
            myLibrary.splice(idx,1);
            displayBooks();
        })
    })

}


const newBookBtn=document.getElementById("new-book-btn");
const bookDialog=document.getElementById("new-book-dialog");
newBookBtn.addEventListener("click", function(){
    bookDialog.showModal();
})

const bookForm=document.getElementById("book-form");
bookForm.addEventListener("submit", function(event){
    event.preventDefault();
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const pages=document.getElementById("pages").value;
    const read=document.getElementById("read").value;

    const newBook=new Book(title,author,pages,read);
    addBooktoLibrary(newBook);
    displayBooks();
    bookDialog.close();
    bookForm.reset(); 
})

const closeBtn=document.getElementById("close-dialog");
closeBtn.addEventListener("click", function(){
    bookDialog.close();
})

Book.prototype.toggleRead=function(){
    this.read=this.read=="read"?"unread":"read";
}

displayBooks();