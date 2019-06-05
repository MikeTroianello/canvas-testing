var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

for (let i = 0; i < canvas.width; i++) {
  ctx.fillRect(i * 100, i * 100, 100, 100);
}

ctx.fillRect(200, 200, 100, 100);
