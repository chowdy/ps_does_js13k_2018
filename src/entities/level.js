/*
 * Level
 *
 * Code that has to do with levels. Lol.
 *
 * class Level: A list of LevelEvents.
 * class LevelEvent: A LevelEvent does something at a certain time.
 * getAllLevels(): Get all of the levels defined for the game!
 */

const Entity = require('./entity')

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
    }

}

class Level extends Entity {

    constructor(levelEvents) {
        super()
        this.levelEvents = levelEvents
        this.isComplete = false
    }

    stateUpdate(deltaTime) { deltaTime }

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
        allLevels = [
            new Level([ new LevelEvent(0, () => {}) ])
        ]
    }
    return allLevels
}
