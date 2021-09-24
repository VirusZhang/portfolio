var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');
var grd = ctx.createLinearGradient(150, 0, 200, 0)
grd.addColorStop(0, 'blue');
grd.addColorStop(0.5, 'white');
grd.addColorStop(1, 'pink');
ctx.fillStyle = grd;
ctx.fillRect(100, 20, 200, 100);
ctx.fillStyle = 'red';
ctx.beginPath()
ctx.ellipse(100, 75, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.setLineDash([5,5]);
ctx.moveTo(0,200);
ctx.lineTo(200, 0);
ctx.stroke();