const Entity = require('./entity')

class Player extends Entity {

    constructor() {
        super('Player')
        console.log(`instantiated ${ this.toString() }`)
    }

    stateUpdate() {
        super.stateUpdate()
        //console.log(this.toString())
    }

    renderUpdate() {
        super.renderUpdate()
    }
}

module.exports = Player
