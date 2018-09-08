//const Globals = require('../globals')
const Player = require('../entities/player')
const Gamestate = require('../lib/gamestate')

class Play extends Gamestate {

    constructor() {
        super()
        this.player = new Player()
    }

    start() {
        console.log('play game state started')
    }

    update(deltaTime) {

        //let ctx = Globals.getCtx()
        //let canvas = ctx.canvas

        //console.log(ctx, canvas)

        this.player.stateUpdate(deltaTime)

        // draw player
        this.player.renderUpdate()
    }

    end() {
        console.log('play game state ended')
    }
}

module.exports = Play
