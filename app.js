function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function bookify() {
    console.log(`${title} is by ${author}. It is ${pages} pages long. I have ${read} it.`);
  };
}

const theHobbit = new Book("the Hobbit", "J.R.R. Tolkien", "295", "not read");
theHobbit.info(); 

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// console.log(theHobbit.info());
