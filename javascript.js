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
