var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

// for (let i = 0; i < canvas.width; i++) {
//   ctx.fillStyle = `rgba(${i}, ${i}, ${i * 30}, 1)`;
//   ctx.fillRect(i * 100, i * 100, 100, 100);
// }

//Line

// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

//arc
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'red';
// ctx.stroke();

// for (let i = 0; i < 1009; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var r = Math.floor(Math.random() * 255);
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
//     Math.random() * 255
//   )},${Math.floor(Math.random() * 255)}, ${Math.random()}`;
//   ctx.stroke();
// }

//MOVING CIRCLE
let x = 100;
let y = 100;
let dx = 10;
let dy = 10;

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  if (x >= innerWidth - 30) {
    dx = -10;
  }
  if (x <= 30) {
    dx = 10;
  }
  if (y >= innerHeight - 30) {
    dy = -10;
  }
  if (y <= 30) {
    dy = 10;
  }
  x += dx;
  y += dy;
}

animate();
