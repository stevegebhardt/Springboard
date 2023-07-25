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

    toDoForm.reset();
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
});
