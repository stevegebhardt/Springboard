const randomColor = () => {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const h1 = document.querySelector("h1");

setInterval(function () {
  h1.style.color = randomColor();
}, 500);
