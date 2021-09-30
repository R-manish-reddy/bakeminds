let books = [

];


/*
    TODO: The existing code uses functions called `addBook` and `deleteBook`, implement them.
  */

//...

function render() {
  const container = document.querySelector(".book-list");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  books.forEach((book, index) => {
    const bookNameElement = document.createElement("span");
    bookNameElement.className = "book-name";
    bookNameElement.innerHTML = book.name;

    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.className = "delete-book btn btn-danger";
    deleteButtonElement.innerHTML = "Delete";

    deleteButtonElement.onclick = () => deleteBook(book);

    //DELETE ITEM
    function deleteBook() {
      deleteButtonElement.parentElement.remove();
      books.splice(index, 1);
      console.log(123);
    }

    //Add Element

    const bookElement = document.createElement("li");
    bookElement.className = "list-group-book book row";
    bookElement.appendChild(bookNameElement);
    bookElement.appendChild(deleteButtonElement);

    container.appendChild(bookElement);
  });
}

document.querySelector("#addBook").addEventListener("click", addBook);

function addBook() {
  const ipValue = document.querySelector("#newBookName").value;
  if (ipValue.trim() === '') {
    alert("enter any book name");
  }else{
    if (books.length === 0) {
      var newBookObj = {
        id: 1,
        name: ipValue,
      };
    } else {
      var newBookObj = {
        id: books[books.length - 1].id + 1,
        name: ipValue,
      };
    }
  
    books.push(newBookObj);
    console.log(books);
    render();
  }
  
}
