var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

for (let i = 0; i < canvas.width; i++) {
  ctx.fillStyle = `rgba(${i}, ${i}, ${i * 30}, 1)`;
  ctx.fillRect(i * 100, i * 100, 100, 100);
}

//Line

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'blue';
ctx.stroke();

//arc
ctx.arc(300, 300, 30, 0, Math.Pi * 2, false);
ctx.stroke();
