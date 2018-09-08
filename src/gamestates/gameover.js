let gamestate = require('../gamestate-manager')
//const Globals = require('../globals')
const Gamestate = require('../lib/gamestate')
const Play = require('../gamestates/play')

class Gameover extends Gamestate {

    start() {
        console.log('boot game state started')

        console.log(window)
        window.setTimeout(() => { gamestate.changeGameState(new Play()) }, 3.0)
    }

    update() {
    }

    end() {
        console.log('boot game state ended')
    }

}

module.exports = Gameover
