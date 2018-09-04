const input = require('../lib/input')
const { canvas } = require('../globals')
const Player = require('../entities/player')

// demo entity
// TODO: Refactor into a list of entities, call each one's update methods per frame
let player = new Player()

module.exports = {

    start() {
        console.log('play game state started')
    },

    // deltaTime is the time between frames
    // If your code is running in update and does anything over time, it needs to be relative to
    // deltaTime
    update(deltaTime) {

        // player controller
        // TODO: Break out into player entity update
        if (input.isDown(input.LEFT)) {
            player.x = player.x - (player.speed * deltaTime)
        }
        if (input.isDown(input.RIGHT)) {
            console.log(JSON.stringify(player))
            player.x = player.x + (player.speed * deltaTime)
        }
        if (input.isDown(input.UP)) {
            player.y = player.y - (player.speed * deltaTime)
        }
        if (input.isDown(input.DOWN)) {
            player.y = player.y + (player.speed * deltaTime)
        }

        // check bounds collisions
        // TODO: Break out into player entity update
        if (player.x < 0) {
            player.x = canvas.width
        } else if (player.x > canvas.width) {
            player.x = 0
        }
        if (player.y < 0) {
            player.y = canvas.height
        } else if (player.y > canvas.height) {
            player.y = 0
        }

        player.stateUpdate()

        // draw player
        player.renderUpdate()

    },

    end() {
        console.log('play game state ended')
    }
}
