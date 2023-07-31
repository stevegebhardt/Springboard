document.addEventListener("DOMContentLoaded", function () {
  let toDoForm = document.getElementById("toDoForm");
  let list = document.getElementById("myList");
  let removeButton = document.createElement("button");
  removeButton.id = "remove";
  removeButton.innerText = "Remove";

  let completedButton = document.createElement("button");
  completedButton.id = "completed";
  completedButton.innerText = "Completed";

  let newToDo = document.createElement("li");

  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
      newTodo.style.textDecoration = "line-through";
    }
    newTodo.appendChild(completedButton);
    newTodo.appendChild(removeButton);
    list.appendChild(newTodo);
  }

  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    newToDo.innerText = document.getElementById("toDo").value;
    newToDo.isCompleted = false;
    console.log(newToDo.innerText);

    // newToDo.appendChild(completedButton);
    // newToDo.appendChild(removeButton);
    list.appendChild(newToDo);

    // toDoForm.reset();
    console.log(newToDo.innerText);
    savedTodos.push({ task: newToDo.innerText, isCompleted: false });
    console.log(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  });

  list.addEventListener("click", function (e) {
    const target = e.target.id;
    //console.log(target);
    if (target === "completed") {
      e.target.parentNode.style.textDecoration = "line-through";
    } else if (target === "remove") {
      e.target.parentNode.remove();
      let temp = JSON.parse(localStorage.getItem("todos")) || [];
      console.log(temp);
      console.log(temp.findIndex());
      // temp.splice(temp.index, 1);
      // localStorage.setItem("todos", JSON.stringify(temp));
    }
  });
});
