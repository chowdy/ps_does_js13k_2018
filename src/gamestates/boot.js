const gamestate = require('../gamestate-manager')
const Globals = require('../globals')
const Gamestate = require('../lib/gamestate')
const Play = require('../gamestates/play')
const Input = require('../lib/input')

function renderMainMenu() {

    let ctx = Globals.getCtx()

    ctx.fillStyle = Globals.colors.Christi

    ctx.font = `30px ${Globals.font }`
    ctx.fillText('Name TBD',10,50)

    ctx.font = `15px ${Globals.font }`
    ctx.fillText('js13k 2018',10,75)

    ctx.font = `10px ${Globals.font }`
    ctx.fillText('press enter to play',10,100)

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
