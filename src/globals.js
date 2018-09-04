var canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
canvas.style.backgroundColor = '#000';
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

module.exports.ctx = ctx
module.exports.canvas = canvas
