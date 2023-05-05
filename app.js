let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function bookify() {
    console.log(
      `${title} is by ${author}. It is ${pages} pages long. I have ${read} it.`
    );
  };
}

function addBookToLibrary() {
  const book = document.createElement("div");
  book.classList.add("card");
  book.innerHTML = "This is a book";
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "It's title is: ";
  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.innerHTML = "It has XXX pages.";
  const author = document.createElement("div");
  author.classList.add("author");
  author.innerHTML = "It's author is: ";
  book.appendChild(title);
  book.appendChild(pages);
  book.appendChild(author);
  document.getElementById("library").appendChild(book);
}

// const theHobbit = new Book("the Hobbit", "J.R.R. Tolkien", "295", "not read");
// theHobbit.info();
// myLibrary.push(theHobbit);
// console.log(myLibrary);

const book = document.createElement("div");
book.classList.add("card");
book.innerHTML = "This is a book";
const title = document.createElement("div");
title.classList.add("title");
title.innerHTML = "It's title is: ";
const pages = document.createElement("div");
pages.classList.add("pages");
pages.innerHTML = "It has XXX pages.";
const author = document.createElement("div");
author.classList.add("author");
author.innerHTML = "It's author is: ";
book.appendChild(title);
book.appendChild(pages);
book.appendChild(author);
document.getElementById("library").appendChild(book);

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// console.log(theHobbit.info());
