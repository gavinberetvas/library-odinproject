const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const myLibrary = [];
const form = document.getElementById("newbook");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
  
    const book = {
      title,
      author,
      pages,
      read,
    };
  
    myLibrary.push(book);
    addBookSingularToLibrary();
    closeModal(modal);
  });
  
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function addBookSingularToLibrary() {
  const lastObj = myLibrary[myLibrary.length - 1];
  const booktitle = lastObj.title;
  const bookauthor = lastObj.author;
  const bookpages = lastObj.pages;
  let bookread = lastObj.read;

  const book = document.createElement("div");
  book.classList.add("card");

  const title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = `Title: ${booktitle}`;

  const author = document.createElement("div");
  author.classList.add("author");
  author.innerHTML = `Author: ${bookauthor}`;

  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.innerHTML = `Pages: ${bookpages}`;

  const read = document.createElement("div");
  read.classList.add("read");
  bookread ? (read.innerHTML = "read") : (read.innerHTML = "not read");
  read.setAttribute("data-key", `${booktitle}`);

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove";
  removeBtn.addEventListener("click", () => {
    const bookIndex = myLibrary.findIndex((obj) => obj.title === booktitle);
    myLibrary.splice(bookIndex, 1);
    book.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Read?";
  editBtn.addEventListener("click", () => {
    const edit = document.querySelector(`div[data-key="${booktitle}"]`);
    if (bookread === true) {
      bookread = false;
      edit.innerHTML = "not read";
    } else {
      bookread = true;
      edit.innerHTML = "read";
    }
  });

  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(read);
  book.appendChild(removeBtn);
  book.appendChild(editBtn);
  document.getElementById("library").appendChild(book);

  // alert(myLibrary);
}

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function bookify() {
//     console.log(
//       `${title} is by ${author}. It is ${pages} pages long. I have ${read} it.`
//     );
//   };
// }