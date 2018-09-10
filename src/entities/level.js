/*
 * Level
 *
 * A list of LevelEvents. A LevelEvent does something at a certain time.
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
    }

    stateUpdate(deltaTime) { deltaTime; }

    renderUpdate(deltaTime) { deltaTime; }

}

module.exports.Level = Level
module.exports.LevelEvent = LevelEvent
