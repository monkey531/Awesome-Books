// Declaration of my items in he DOM
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBookBtn = document.querySelector('#add');
const bookList = document.querySelector('#bookList');

// // Initialise the collection of books

let collectBooks = JSON.parse(localStorage.getItem('books')) || [];

// Display the current date

// Create a class to store books
class BookClass {
  // Create class constructor

  Constructor(title, author) {
    this.bookTitle = title;
    this.bookAuthor = author;
  }

  // Add the method to add new book to the localStorage
  addBook() {
    this.book = {};
    this.book.title = bookTitle.value;
    this.book.author = bookAuthor.value;
    collectBooks.push(this.book);
  }

  // Add the method to remove a given book to the localStorage

  remove(element) {
    this.bookId = element.target.id;
    this.bookToDelete = collectBooks[this.bookId - 1];
    this.freshCollection = collectBooks.filter(
      (book) => book !== this.bookToDelete,
    );
    collectBooks = this.freshCollection;
    localStorage.setItem('books', JSON.stringify(this.freshCollection));
    element.target.parentElement.remove();
  }

  // Add the method to display  the whole localStorage

  displayBooks() {
    bookList.innerHTML = '';
    collectBooks.forEach((element, index) => {
      // Define all neccessary items

      const parentContainer = document.createElement('div');
      parentContainer.classList.add('book-card');
      const titleContainer = document.createElement('span');
      const authorContainer = document.createElement('span');
      const removeButton = document.createElement('button');
      removeButton.classList.add('btn');
      const bookInfos = document.createElement('p');
      bookInfos.classList.add('book-infos');
      removeButton.innerText = 'Remove';

      // Remove book button on Click

      removeButton.addEventListener('click', (e) => {
        this.remove(e);
      });

      removeButton.setAttribute('id', index + 1);
      titleContainer.innerText = `'' ${element.title} '' by `;
      authorContainer.innerText = element.author;
      bookInfos.appendChild(titleContainer);
      bookInfos.appendChild(authorContainer);
      parentContainer.appendChild(bookInfos);
      parentContainer.appendChild(removeButton);

      bookList.append(parentContainer);
    });
  }
}

export {
  BookClass, bookTitle, bookAuthor, addBookBtn, bookList,
};