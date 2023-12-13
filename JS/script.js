let $ = document;

let listItem = $.querySelectorAll(".list-group");
let inputElem = $.getElementById("form-control");
let formSubmit = $.getElementById("submit-form");
let todoUlElm = $.getElementById("list-item");

function addNewTodo(newTodoValue) {
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let newTodoSpan = $.createElement("span");
  newTodoSpan.innerHTML = newTodoValue;

  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";
  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  newTodoLi.append(newTodoSpan, newTodoTrash);

  todoUlElm.append(newTodoLi);

}

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();
  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = " ";
      addNewTodo(newTodoValue);
    }
  }
});
