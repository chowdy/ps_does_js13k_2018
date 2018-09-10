const gamestate = require('../gamestate-manager')
const Globals = require('../globals')
const Gamestate = require('../lib/gamestate')
const Play = require('../gamestates/play')
const Input = require('../lib/input')

function renderMainMenu() {

    Globals.render.text('Name TBD', { x: 10, y: 50, size: '30px' })
    Globals.render.text('js13k 2018', { x: 10, y: 75, size: '15px' })
    Globals.render.text('press space bar to play', { x: 10, y: 100, size: '10px '})

}

class Boot extends Gamestate {

    start() {
        console.log('boot game state started')
    }

    update() {

        if (Input.isDown(Input.FIRE)) {
            gamestate.changeGameState(new Play())
            return
        }

        // TODO: draw main menu
        renderMainMenu()

    }

    end() {
        console.log('boot game state ended')
    }

}

module.exports = Boot
