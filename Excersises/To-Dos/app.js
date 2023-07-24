document.addEventListener("DOMContentLoaded", function () {
  let toDoForm = document.getElementById("toDoForm");
  let list = document.getElementById("myList");

  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "Completed";

    let newToDo = document.createElement("li");
    newToDo.innerText = document.getElementById("toDo").value;

    newToDo.appendChild(removeButton);
    list.appendChild(newToDo);

    toDoForm.reset();
  });

  list.addEventListener("click", function (e) {
    const targetTagToLowerCase = e.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      e.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      e.target.parentNode.remove();
    }
  });
});
