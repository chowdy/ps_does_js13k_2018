const Entity = require('./entity')
const Globals = require('../globals')
const input = require('../lib/input')
const Missile = require('../entities/missile')

class Player extends Entity {

    constructor() {
        super('Player', null, 25, 25, 150, Globals.colors.Red)
        console.log(`instantiated ${ this.toString() }`)
        this.x = 320
        this.y = 400
        this.missiles = []
        this.timeOfLastMissile = Date.now()
    }

    stateUpdate(deltaTime) {
        super.stateUpdate(deltaTime)
        this.handleInput(deltaTime)
        this.containWithinCanvasBounds()
        this.renderMissiles(deltaTime)
    }

    renderUpdate() {
        super.renderUpdate()
    }

    handleInput(deltaTime) {

        // Movement
        if (input.isDown(input.LEFT)) {
            this.x = this.x - (this.speed * deltaTime)
        }
        if (input.isDown(input.RIGHT)) {
            this.x = this.x + (this.speed * deltaTime)
        }
        if (input.isDown(input.UP)) {
            this.y = this.y - (this.speed * deltaTime)
        }
        if (input.isDown(input.DOWN)) {
            this.y = this.y + (this.speed * deltaTime)
        }

        // Fire
        if (input.isDown(input.FIRE)) {
            this.shootMissile()
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

    renderMissiles(deltaTime) {
        for(var i = 0; i < this.missiles.length; i++) {
            if (this.missiles[i] != null) {
                this.missiles[i].stateUpdate(deltaTime)
                this.missiles[i].renderUpdate()
            }
        }
    }

    shootMissile() {
        var cooldown = 200
        let currentTime = Date.now()
        if(currentTime - this.timeOfLastMissile > cooldown) {
            this.missiles.push(new Missile(this.x, this.y))
            this.timeOfLastMissile = currentTime
        }
    }
}

module.exports = Player
