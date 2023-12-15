document.addEventListener("DOMContentLoaded", function () {
  const solveButton = document.querySelector("button");
  solveButton.addEventListener("click", drawBody);
  drawBackground();
});

function drawBody() {
  const canvas = document.getElementById("bodyCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const thighWidth = document.getElementById("thighWidth").value;
  const bicepsWidth = document.getElementById("bicepsWidth").value;

  ctx.beginPath();
  ctx.arc(150, 100, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 140);
  ctx.lineTo(150, 300);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 160);
  ctx.lineTo(150 - bicepsWidth / 2, 200);
  ctx.moveTo(150, 160);
  ctx.lineTo(150 + bicepsWidth / 2, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 300);
  ctx.lineTo(150 - thighWidth / 2, 400);
  ctx.moveTo(150, 300);
  ctx.lineTo(150 + thighWidth / 2, 400);
  ctx.stroke();
}

function drawBackground() {
  const canvas = document.getElementById("bodyCanvas");
  const ctx = canvas.getContext("2d");

  const backgroundImage = new Image();
  // backgroundImage.src = "./img/fitness-center-1259302_1920.jpg";
  backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  };
}
