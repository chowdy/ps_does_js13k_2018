let gamestate = require('../gamestate-manager')
const Globals = require('../globals')
const Gamestate = require('../lib/gamestate')
const Play = require('../gamestates/play')

function renderMainMenu() {

    let ctx = Globals.getCtx()
    ctx.font = '30px Arial'
    ctx.fillText('Hello World',10,50)

}

class Boot extends Gamestate {

    start() {
        console.log('boot game state started')

        console.log(window)
        window.setTimeout(() => { gamestate.changeGameState(new Play()) }, 3.0)
    }

    update() {

        // TODO: draw main menu
        renderMainMenu()

    }

    end() {
        console.log('boot game state ended')
    }

}

module.exports = Boot
