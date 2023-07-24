const form = document.getElementById("toDoForm");
const list = document.getElementById("myList");

//pull info from local storage
const savedItems = JSON.parse(localStorage.getItem("toDo")) || [];
for (let i = 0; i < savedItems.length; i++) {
  let newToDo = document.createElement("li");
  newToDo.innerText = savedItems[i].task;
  newToDo.isCompleted = savedItems[i].isCompleted ? true : false;
  if (newToDo.isCompleted) {
    newToDo.style.textDecoration = "line-through";
  }
  list.appendChild(newToDo);
}

form.addEventListener("click", function (e) {
  e.preventDefault();
  let newToDo = document.createElement("li");
  let task = document.getElementById("toDo");
  newToDo.innerText = task;
  newToDo.isCompleted = false;
  form.reset();
  list.appendChild(newToDo);

  savedItems.push({ task: newToDo.innerText, isCompleted: false });
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
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});
