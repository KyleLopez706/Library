function Book(title, author, pages, read)  {
    this.title = title
    this.author = author        
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID();
}

const myLibrary = [];

function addBookToLibrary (title, author, pages, read)  {
   const book = new Book(title, author, pages, read)
   myLibrary.push(book);
     displayBooks();
}


function displayBooks ()  {
    const display = document.getElementById("librarylist");

    display.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<h4>${book.title}</h4>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read}</p>
        <button class="deleteBtn"> Delete </button>`;

        const deleteBtn = bookDiv.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
                display.appendChild(bookDiv);
    });
}   



function showForm () {
    document.getElementById('bookForm').style.display = 'block';
}

   function submitButton(event) {
        event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').value;     
    
    
     
    addBookToLibrary(title, author, pages, read);

        document.getElementById('addBookForm').reset();
        document.getElementById('bookForm').style.display = 'none';
 }

 document.getElementById('bookForm').addEventListener('submit', submitButton);



   



