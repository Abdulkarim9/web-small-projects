"use strict";
const labelInputTodo = document.querySelector(".input-todo");
const btnAddTodo = document.querySelector(".btn-add-todo");
const todosContainer = document.querySelector(".todos");

// Add todo
const addTodo = function (e) {
  e.preventDefault();
  const inputText = labelInputTodo.value.trim();

  if (inputText !== "") {
    const todoTask = document.createElement("div");
    todoTask.classList.add("todo");
    const html = `  
    <p class="todo-text">${inputText}</p>
    <div class="todo-controls">
      <button class="btn-completed" type="button">Completed</button>
      <button class="btn-delete" type="button">Delete</button>
    </div>
  `;
    todoTask.innerHTML = html;
    todosContainer.prepend(todoTask);

    // Delete todo
    const btnDeleteTodo = todoTask.querySelector(".btn-delete");
    btnDeleteTodo.addEventListener("click", function () {
      todosContainer.removeChild(todoTask);
    });

    const todoText = todoTask.querySelector(".todo-text");
    const BtnCompletedTodo = todoTask.querySelector(".btn-completed");
    BtnCompletedTodo.addEventListener("click", function () {
      todoText.classList.toggle("todo-completed");
    });
    todoText.addEventListener("click", function () {
      todoText.classList.toggle("todo-completed");
    });
  } else alert("Please enter a todo task");
  labelInputTodo.value = "";
};

btnAddTodo.addEventListener("click", addTodo);
