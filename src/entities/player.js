const Entity = require('./entity')

class Player extends Entity {

    constructor() {
        super('Player')
    }

    stateUpdate() {
        super.stateUpdate()
        console.log(this.toString())
    }

    renderUpdate() {
        super.renderUpdate()
    }
}

module.exports = Player
