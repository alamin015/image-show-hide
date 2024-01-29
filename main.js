const btn = document.querySelector(".button");
const img = document.querySelector(".img");

btn.addEventListener("click", (e) => {
  const checker = e.target.innerText;
  const text = checker === "Show Image" ? "Close Image" : "Show Image";
  e.target.innerText = text;

  //   image show js
  if (text === "Show Image") {
    img.classList.add("control");
  } else {
    img.classList.remove("control");
  }
});
