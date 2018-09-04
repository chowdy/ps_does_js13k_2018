var canvas = document.createElement('canvas')
canvas.width = 640
canvas.height = 480
canvas.style.backgroundColor = '#000'
document.body.appendChild(canvas)

module.exports.ctx = canvas.getContext('2d')
module.exports.canvas = canvas
module.exports.CONFIDENCE_LEVEL = 'dev' // vs. 'prod'