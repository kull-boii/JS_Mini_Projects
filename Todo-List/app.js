// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

// prettier-ignore
function addTodo(event) {

    //   prevents the form from being submitted
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // creting li
    const li = document.createElement("li");
    li.innerText = todoInput.value;
    li.classList.add("todo-item");
    todoInput.value = "";
    // appending li to div
    todoDiv.appendChild(li);

    // completed button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = "<i class=\"fas fa-check\"></i>"
    completedBtn.classList.add("complete-btn");

    // appending completedBtn to div
    todoDiv.appendChild(completedBtn);

    // trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = "<i class=\"fas fa-trash\"></i>"
    trashBtn.classList.add("trash-btn");

    // appending trashBtn to div
    todoDiv.appendChild(trashBtn);


    // appending the todo div to todoList
    todoList.appendChild(todoDiv);

}

function deleteCheck(event) {
  const itemClicked = event.target;

  // if the itemClicked is todo button
  // Do note that the class list is an array thus we are grabing the first one

  if (itemClicked.classList[0] === "trash-btn") {
    // we need to delete the parent div
    // thus to get parent of an element
    const div = itemClicked.parentElement;
    div.classList.toggle("delete");

    // delete the parent
    // this event listners plays when the transition is completed
    // i.e it waits untill the transition get completed
    div.addEventListener("transitionend", function () {
      div.remove();
    });
  }

  // if clicked on completed button
  if (itemClicked.classList[0] === "complete-btn") {
    const div = itemClicked.parentElement;
    div.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todo_items = todoList.childNodes;
  todo_items.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
