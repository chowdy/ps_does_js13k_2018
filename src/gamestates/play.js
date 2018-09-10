const Globals = require('../globals')
const Player = require('../entities/player')
const Gamestate = require('../lib/gamestate')
const { Level, LevelEvent, getAllLevels } = require('../entities/level')

class Play extends Gamestate {

    constructor() {
        super()

        this.player = new Player()
        this.allLevels = [
            new Level([
                new LevelEvent(0, () => { /* spawn enemy */ })
            ])
        ]
        this.currentLevelIndex = -1
        this.currLevel = undefined
        this.prevLevel = undefined
    }

    start() {
        console.log('play game state started')
        this.changeToNextLevel()
    }

    getLevelTime() {
        return (new Date() - this.currentLevelStart) / 1000
    }

    changeToNextLevel() {

        if (this.currLevel) {
            this.prevLevel = this.currLevel
            // TODO: Trigger level transition on the prevLevel?
        }

        this.currentLevelIndex++
        this.currLevel = getAllLevels()[this.currentLevelIndex]
        this.currentLevelStart = Globals.getTime()

        console.log(`Changed to Level ${ this.currentLevelIndex }`)
    }

    update(deltaTime) {

        if (this.currLevel) {
            this.currLevel.stateUpdate(deltaTime)
            this.currLevel.renderUpdate()
        }

        this.player.stateUpdate(deltaTime)
        this.player.renderUpdate()

    }

    end() {
        console.log('play game state ended')
    }
}

module.exports = Play
