document.addEventListener("DOMContentLoaded", function () {
  let toDoForm = document.getElementById("toDoForm");
  let list = document.getElementById("myList");

  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.id = "remove";
    removeButton.innerText = "Remove";

    let completedButton = document.createElement("button");
    completedButton.id = "completed";
    completedButton.innerText = "Completed";

    let newToDo = document.createElement("li");
    newToDo.innerText = document.getElementById("toDo").value;

    newToDo.appendChild(completedButton);
    newToDo.appendChild(removeButton);
    list.appendChild(newToDo);

    // toDoForm.reset();
  });

  list.addEventListener("click", function (e) {
    const target = e.target.id;
    console.log(target);
    if (target === "completed") {
      e.target.parentNode.style.textDecoration = "line-through";
    } else if (target === "remove") {
      e.target.parentNode.remove();
    }
  });

  // Start of local storage portion
  //pull info from local storage
  const savedItems = JSON.parse(localStorage.getItem("toDo")) || [];
  for (let i = 0; i < savedItems.length; i++) {
    let newToDo = document.createElement("li");
    newToDo.innerText = savedItems[i].toDo;
    newToDo.isCompleted = savedItems[i].isCompleted ? true : false;
    if (newToDo.isCompleted) {
      newToDo.style.textDecoration = "line-through";
    }
    list.appendChild(newToDo);
  }

  toDoForm.addEventListener("click", function (e) {
    e.preventDefault();
    let newToDo = document.createElement("li");
    let task = document.getElementById("toDo").value;
    newToDo.innerText = task;
    newToDo.isCompleted = false;
    toDoForm.reset();
    list.appendChild(newToDo);

    savedItems.push({ toDo: newToDo.innerText, isCompleted: false });
    localStorage.setItem("toDo", JSON.stringify(savedItems));
  });

  list.addEventListener("click", function (e) {
    let clickedItem = e.target;
    if (!clickedItem.isCompleted) {
      clickedItem.style.textDecoration = "line-through";
      clickedItem.isCompleted = true;
    } else {
      clickedItem.style.textDecoration = "none";
      clickedItem.isCompleted = false;
    }

    for (let i = 0; i < savedTodos.length; i++) {
      if (savedTodos[i].task === clickedItem.innerText) {
        savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
        localStorage.setItem("todos", JSON.stringify(savedTodos));
      }
    }
  });
});
