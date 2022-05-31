import myMenu from './modules/menu.js';
import {
  BookClass,
  bookTitle,
  bookAuthor,
  addBookBtn,
} from './modules/books.js';
import myDateTime from './modules/date.js';

const collectionBooks = JSON.parse(localStorage.getItem('books')) || [];

const myBookList = new BookClass();

// Button to add new book to the collection

addBookBtn.addEventListener('click', () => {
  myBookList.addBook();
  bookTitle.value = '';
  bookAuthor.value = '';
  localStorage.setItem('books', JSON.stringify(collectionBooks));
  myBookList.displayBooks();
});

window.addEventListener('DOMContentLoaded', () => {
  myBookList.displayBooks();
});

myMenu();

document.getElementById('date').innerHTML = myDateTime;