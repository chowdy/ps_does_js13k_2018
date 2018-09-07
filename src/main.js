console.log('Hello world! -- The game has started')

const Globals = require('./globals')
const gamestate = require('./gamestate')
const loop = require('./lib/loop')

gamestate.changeGameState(require('./gamestates/boot'))

function createCanvas() {
    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', Globals.CANVAS_ID)
    canvas.width = 640
    canvas.height = 480
    canvas.style.backgroundColor = '#000'
    document.body.appendChild(canvas)
    //let ctx = canvas.getContext('2d')
    console.log('canvas created', canvas)
}

createCanvas()

// Game Loop
// Called once per frame
loop.start(function (deltaTime) {
    let ctx = Globals.getCtx()

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    gamestate.update(deltaTime)

    //console.log('game update fn %s', deltaTime)
})
