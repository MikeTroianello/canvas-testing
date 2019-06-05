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

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

      ctx.stroke();
      // ctx.fill();
    };
    this.update = function() {
      if (this.x + radius >= innerWidth || this.x - radius <= 0) {
        this.dx = -this.dx;
      }
      if (this.y + radius >= innerHeight || this.y - radius <= 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    };
  }
}

var circleArray = [];

for (let i = 0; i < 200; i++) {
  let r = 30;
  let x = Math.random() * (innerWidth - r * 2) + r;
  let y = Math.random() * (innerHeight - r * 2) + r;
  let dx = (Math.random() - 0.5) * 5;
  let dy = (Math.random() - 0.5) * 5;
  ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)}, ${Math.random()}`;
  circleArray.push(new Circle(x, y, dx, dy, r));
}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
