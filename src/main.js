console.log('Hello world! -- The game has started')

const Globals = require('./globals')
const gamestate = require('./gamestate-manager')
const loop = require('./lib/loop')
const Boot = require('./gamestates/boot')

gamestate.changeGameState(new Boot())

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

/*
 * The Game Loop ⚡️ - Called once per frame
 *
 * deltaTime is the time between frames
 * If your code is running in update and does things over time, it likely needs to be relative to deltaTime
 */
loop.start(function (deltaTime) {
    let ctx = Globals.getCtx()

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    gamestate.update(deltaTime)

    //console.log('game update fn %s', deltaTime)
})
