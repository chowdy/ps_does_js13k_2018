/*
 * Levels
 *
 * Code that has to do with levels. Lol.
 *
 * class Levels: A list of LevelEvents.
 * class LevelEvent: A LevelEvent does something at a certain time.
 * getAllLevels(): Get all of the levels defined for the game!
 */

const { BaseEnemy } = require('../entities/enemies')
const Entity = require('./entity')
const Globals = require ('../globals')

class LevelEvent {

    /*
     * LevelEvent(time, event)
     *
     * levelTime - The time to fire the event relative to the level's start time
     * event     - A function to fire at the specified LevelTime
     */
    constructor(levelTime, event) {
        this.levelTime = levelTime
        this.event = event
        this.isFired = false
        this.isComplete = false
    }

}

class Level extends Entity {

    constructor(name, levelEvents) {
        super()
        this.name = name
        this.levelEvents = levelEvents
        this.isComplete = false
        this.allEnemies = []
    }

    getLevelTime() {
        return Globals.getTime() - this.startTime
    }

    stateUpdate(deltaTime, levelTime) {
        this.levelEvents.forEach((levelEvent) => {
            if (!levelEvent.isFired) {
                if (levelTime >= levelEvent.levelTime) {
                    console.log('Firing levelEvent ', levelEvent)
                    levelEvent.event()
                    levelEvent.isFired = true
                }
            }
        })
    }

    renderUpdate(deltaTime) { deltaTime }

    // Returns true if the player beat the level, else returns false
    getIsComplete() {
        return this.isComplete
    }

}

module.exports.Level = Level
module.exports.LevelEvent = LevelEvent

let allLevels = undefined
module.exports.getAllLevels = () => {
    if (allLevels == undefined) {
        allLevels = []

        let level1 = new Level('Level 1', [
            new LevelEvent(0, () => { level1.allEnemies.push(new BaseEnemy()) })
        ])
        allLevels.push(level1)
    }

    console.log('allLevels', allLevels)
    return allLevels
}
