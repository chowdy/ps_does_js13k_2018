//const Globals = require('../globals')
const Player = require('../entities/player')

// demo entity
// TODO: Refactor into a list of entities, call each one's update methods per frame?
let player = new Player()

module.exports = {

    start() {
        console.log('play game state started')
    },

    // deltaTime is the time between frames
    // If your code is running in update and does anything over time, it needs to be relative to
    // deltaTime
    update(deltaTime) {

        //let ctx = Globals.getCtx()
        //let canvas = ctx.canvas

        //console.log(ctx, canvas)

        player.stateUpdate(deltaTime)

        // draw player
        player.renderUpdate()

    },

    end() {
        console.log('play game state ended')
    }
}
