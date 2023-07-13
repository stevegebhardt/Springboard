const randomColor = () => {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const letters = document.querySelectorAll(".letter");
setInterval(function () {
  for (let letter of letters) {
    letter.style.color = randomColor();
  }
}, 500);
