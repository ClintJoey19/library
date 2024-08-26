const addBookForm = document.getElementById("addBookForm");
const tbody = document.getElementById("tbody");

let myLibrary = [];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.toggleStatus = () => {
    this.isRead = !this.isRead;
  };
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);

  // add to library
  myLibrary.push(book);

  const tr = document.createElement("tr");
  const titleTd = document.createElement("td");
  const authorTd = document.createElement("td");
  const pagesTd = document.createElement("td");
  const actionsTd = document.createElement("td");

  // set the values
  titleTd.textContent = title;
  authorTd.textContent = author;
  pagesTd.textContent = pages;

  const updateBtn = document.createElement("button");
  updateBtn.textContent = book.isRead ? "Read" : "Mark as read";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  updateBtn.addEventListener("click", (e) => {
    book.toggleStatus();

    updateBtn.textContent = book.isRead ? "Read" : "Mark as read";
  });

  deleteBtn.addEventListener("click", () => {
    tbody.removeChild(tr);
  });

  actionsTd.appendChild(updateBtn);
  actionsTd.appendChild(deleteBtn);

  tr.appendChild(titleTd);
  tr.appendChild(authorTd);
  tr.appendChild(pagesTd);
  tr.appendChild(actionsTd);

  // render to the DOM
  tbody.appendChild(tr);
}

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target[0].value;
  const author = e.target[1].value;
  const pages = Number(e.target[2].value);

  addBookToLibrary(title, author, pages);
});
