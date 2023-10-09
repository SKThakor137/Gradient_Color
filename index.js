const boxes = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9",
  "box10",
  "box11",
  "box12",
  "box13",
  "box14",
  "box15",
  "box16",
  "box17",
  "box18",
  "box19",
  "box20",
];

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

function divClickHandler(event) {
  let divId = event.target.id;
  let div = document.getElementById(divId);

  let message = document.createElement("div");
  message.className = "copied-message";
  message.textContent = "Copied";

  message.style.display = "block";

  event.target.appendChild(message);

  const background = div.style.background;
  navigator.clipboard
    .writeText(`background : ${background};`)
    .then(() => {
      setTimeout(() => {
        event.target.removeChild(message);
      }, 500);
    })
    .catch(function (err) {
      console.error("Unable to copy: " + err);
    });
}

let allDiv = document.querySelectorAll(".gradient-box");
allDiv.forEach(function (div) {
  div.onclick = divClickHandler;
});

function toggleColors() {
  for (const boxId of boxes) {
    const gradientBox = document.getElementById(boxId);
    const newColor = generateRandomColor();
    const newColor2 = generateRandomColor();

    gradientBox.style.background = `linear-gradient(to right, ${newColor}, ${newColor2})`;
  }
}
toggleColors();
