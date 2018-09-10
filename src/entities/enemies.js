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
        this.y = 200
        this.missiles = []
        this.timeOfLastMissile = Date.now()
    }

    stateUpdate() {
        super.stateUpdate()
    }

    renderUpdate() {
        super.renderUpdate()
    }

}
module.exports.Enemy = Enemy

class BaseEnemy extends Enemy {}
module.exports.BaseEnemy = BaseEnemy

