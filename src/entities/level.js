/*
 * Level
 *
 * A list of LevelEvents. A LevelEvent does something at a certain time.
 */

const Entity = require('../entity')

class LevelEvent {

    spawnEnemy(enemy) {
    }

    constructor(action, )
}

class Level extends Entity {

    constructor(levelEvents) {
        super()
        this.levelEvents = levelEvents
    }

}

module.exports = Level