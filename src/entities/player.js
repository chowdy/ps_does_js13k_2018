const Entity = require('./entity')
const Globals = require('../globals')
const input = require('../lib/input')

class Player extends Entity {

    constructor() {
        super('Player')
        console.log(`instantiated ${ this.toString() }`)
    }

    stateUpdate(deltaTime) {
        super.stateUpdate(deltaTime)
        //console.log(this.toString())

        this.handleInput(deltaTime)
        this.containWithinCanvasBounds()
    }

    renderUpdate() {
        super.renderUpdate()
    }

    handleInput(deltaTime) {
        if (input.isDown(input.LEFT)) {
            this.x = this.x - (this.speed * deltaTime)
        }
        if (input.isDown(input.RIGHT)) {
            console.log('handleInput: pressed RIGHT')
            console.log(this)
            this.x = this.x + (this.speed * deltaTime)
        }
        if (input.isDown(input.UP)) {
            this.y = this.y - (this.speed * deltaTime)
        }
        if (input.isDown(input.DOWN)) {
            this.y = this.y + (this.speed * deltaTime)
        }
    }

    containWithinCanvasBounds() {
        let canvas = Globals.getCtx().canvas

        if (this.x < 0) {
            this.x = canvas.width
        } else if (this.x > canvas.width) {
            this.x = 0
        }
        if (this.y < 0) {
            this.y = canvas.height
        } else if (this.y > canvas.height) {
            this.y = 0
        }
    }
}

module.exports = Player
