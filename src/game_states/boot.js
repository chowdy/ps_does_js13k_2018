let gamestate = require('../gamestate')

module.exports = {
    start() {
        console.log('boot game state started')
    },
    update() {

        // TODO: draw main menu

        // TODO: handle event to transition to next state
        gamestate.changeGameState(require('./play'))

    },
    end() {
        console.log('boot game state ended')
    }
}