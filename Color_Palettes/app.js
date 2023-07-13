const colors = document.querySelector("#colors");

colors.addEventListener("click", function (e) {
  document.body.style.backgroundColor = e.target.dataset.hex;
});
