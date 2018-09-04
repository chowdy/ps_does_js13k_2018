const globals = require('./globals')
const gamestate = require('./gamestate')
const loop = require('./lib/loop')

console.log('Hello world!')
gamestate.changeGameState(require('./gamestates/boot'))

// Game Loop
// Called once per frame
loop.start(function (deltaTime) {
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height)

    gamestate.update(deltaTime)

    //console.log('game update fn %s', deltaTime)
})
