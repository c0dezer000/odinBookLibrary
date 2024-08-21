const showDialog = document.getElementById("addBtn")
const addBookBtn = document.getElementById("addBookBtn")
const bookContainer = document.getElementById("bookContainer")
const dialog = document.querySelector('dialog')
const bookTitleValue = document.getElementById('bookTitleValue')
const bookAuthorValue = document.getElementById('bookAuthorValue')
const bookPagesValue = document.getElementById('bookPagesValue')

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        let readStatus = "read"
        if(this.read){
            readStatus= "read"
        }
        else{
            readStatus = "not read yet"
        }
        return `${this.title} by ${this.author}, ${this.pages} pages. ${readStatus}{
        }}`
    }
}

const myLibrary = []

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}
function displayBook(){
    bookContainer.innerHTML = ""
    const libraryInfo = myLibrary
    for(let i = 0; i < libraryInfo.length; i++){
        const bookCard = document.createElement('div')
        bookCard.classList.add("bookCard")
        const bookTitle = document.createElement('p')
        bookTitle.textContent = "Book Title: "
        const bookAuthor = document.createElement('p')
        bookAuthor.textContent = "Book Author: "
        const bookPages = document.createElement('p')
        bookPages.textContent = "Book Pages: "
        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        
        // bookTitle.textContent += `${book.title}` 
        // bookAuthor.textContent += `${book.author}`
        // bookPages.textContent += `${book.pages}`
        // bookContainer.appendChild(bookCard)
        bookTitle.textContent += libraryInfo[i].title
        bookAuthor.textContent += libraryInfo[i].author
        bookPages.textContent +=   libraryInfo[i].pages
        bookContainer.appendChild(bookCard)

    }
}
showDialog.addEventListener('click', ()=>{
    dialog.showModal()
    bookTitleValue.value = ""
    bookAuthorValue.value = ""
    bookPagesValue.value = ""
})
addBookBtn.addEventListener('click',()=>{
    const title = bookTitleValue.value
    const author = bookAuthorValue.value
    const pages = bookPagesValue.value
    addBookToLibrary(title,author,pages,true)
    displayBook()

    
})
addBookToLibrary("new","me",1,true)
addBookToLibrary("old","you",2,false)
displayBook()

