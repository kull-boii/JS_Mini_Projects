// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listners
document.addEventListener("DOMContentLoaded", fetchTodo); // window
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

// prettier-ignore
function addTodo(event) {

    // prevents the form from being submitted
    event.preventDefault();

    // save the task to localStorage
    localStorageTodo(todoInput.value);

    // creating a div
    createDiv(todoInput.value);

}

function createDiv(value) {
  // creating DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // creting li
  const li = document.createElement("li");
  li.innerText = value;
  li.classList.add("todo-item");
  todoInput.value = "";

  // appending li to div
  todoDiv.appendChild(li);

  // completed button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("complete-btn");

  // appending completedBtn to div
  todoDiv.appendChild(completedBtn);

  // trash button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
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
    // console.log(itemClicked.parentElement.childNodes[0].innerHTML);
    const div = itemClicked.parentElement;

    div.classList.toggle("delete");

    // delete the parent
    // this event listners plays when the transition is completed
    // i.e it waits untill the transition get completed
    div.addEventListener("transitionend", function () {
      deleteLocalStorageTodo(div.childNodes[0].innerHTML);
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

const fetchArr = () => JSON.parse(localStorage.getItem("arr"));

function localStorageTodo(task) {
  let arr = [];
  if (localStorage.getItem("arr") !== null) {
    // some task are present in local storage
    arr = fetchArr();
    // console.log("present : ", arr);
  }

  arr.push(task);
  localStorage.setItem("arr", JSON.stringify(arr));
  //   console.log("pushed : ", task);
  //   console.log("arr is ", arr);
}

function deleteLocalStorageTodo(removeTask) {
  // delete the task from the arr
  let arr = fetchArr();

  // deleting the removeTask from arr
  arr = arr.filter(function (task) {
    return task !== removeTask;
  });

  // updating local Storage
  localStorage.setItem("arr", JSON.stringify(arr));
}

function fetchTodo() {
  let arr = [];
  if (localStorage.getItem("arr") !== null) {
    // fetch the data and display it
    arr = fetchArr();

    // looping over the tasks present over the arr and displaying them
    arr.forEach(function (task) {
      createDiv(task);
    });
  }
}
