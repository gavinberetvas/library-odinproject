const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const myLibrary = [];
const form = document.getElementById("newbook");
let night = true;

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
  formReset();
  closeModal(modal);
});

function formReset() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  formReset();
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

  const buttonBox = document.createElement("div");
  buttonBox.classList.add("buttonbox");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("button");
  removeBtn.classList.add("rmv");
  removeBtn.innerHTML = "Remove";
  removeBtn.addEventListener("click", () => {
    const bookIndex = myLibrary.findIndex((obj) => obj.title === booktitle);
    myLibrary.splice(bookIndex, 1);
    book.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.classList.add("button");
  editBtn.classList.add("edit");
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
  buttonBox.appendChild(removeBtn);
  buttonBox.appendChild(editBtn);
  book.appendChild(buttonBox);
  document.getElementById("library").appendChild(book);
}

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);
