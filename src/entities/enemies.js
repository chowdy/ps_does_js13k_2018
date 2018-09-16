/*
 * All the enemy classes in the game
 */
const Entity = require('./entity')
const Globals = require('../globals')

class Enemy extends Entity {

    constructor() {
        super('Enemy', null, 25, 25, 150, Globals.colors.Red)
        console.log(`instantiated ${ this.toString() }`)
        this.x = 320
        this.y = 0
        this.missiles = []
        this.timeOfLastMissile = Date.now()
    }

    stateUpdate() {
        super.stateUpdate()

        this.y += this.speed

        if (this.hasReachedBottom()) {
            //Looping around now. Should they disappear?
            //Is this a "survivr the level" game? Or exterminate all enemies?
            this.y = 0
        }
    }

    renderUpdate() {
        super.renderUpdate()
    }

    hasReachedBottom() {
        let canvas = Globals.getCtx().canvas
        return this.y > canvas.height
    }

}
module.exports.Enemy = Enemy

class BaseEnemy extends Enemy {
    constructor() {
        super()
        this.speed = 5
    }
}
module.exports.BaseEnemy = BaseEnemy

