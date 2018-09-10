/*
 * main.js
 *
 * The entry point for the game. The first lines of code executed are at the bottom of the file (ignoring requires)
 */
const Globals = require('./globals')
const gamestate = require('./gamestate-manager')
const loop = require('./lib/loop')
const Boot = require('./gamestates/boot')

function createCanvas() {
    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', Globals.CANVAS_ID)
    canvas.width = 640
    canvas.height = 480
    canvas.style.backgroundColor = Globals.colors.Black
    document.body.appendChild(canvas)

    // Create instructions
    var para = document.createElement('P')
    var missileInstructions = document.createTextNode('Press Spacebar to shoot a missile')
    para.appendChild(missileInstructions)
    document.body.appendChild(para)
    //let ctx = canvas.getContext('2d')
    console.log('canvas created', canvas)
}

/*
 * The Game Loop ⚡️ - Called once per frame
 *
 * deltaTime is the timeOfLastMissile between frames
 * If your code is running in update and does things over timeOfLastMissile, it likely needs to be relative to deltaTime
 */
function TheGameLoop (deltaTime) {
    let ctx = Globals.getCtx()
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    gamestate.update(deltaTime)
}

/*
 * The entry point to the game! 🎉
 */
console.log('Hello world! -- The game has started')
gamestate.changeGameState(new Boot())
createCanvas()
loop.start(TheGameLoop)
