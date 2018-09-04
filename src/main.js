let gamestate = require('./gamestate')

var loop = require('./lib/loop')
let globals = require('./globals')
let ctx = globals.ctx
let canvas = globals.canvas

// Game Loop
// Called once per frame
loop.start(function (dt) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!gamestate.getCurrGameState()) {
        gamestate.changeGameState(require('./gamestates/boot'))
    }

    gamestate.update(dt)

    console.log('game update fn %s', dt)
})
