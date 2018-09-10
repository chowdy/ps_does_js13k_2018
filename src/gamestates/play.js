const Globals = require('../globals')
const Player = require('../entities/player')
const Gamestate = require('../lib/gamestate')
const { getAllLevels } = require('../entities/levels')

class Play extends Gamestate {

    constructor() {
        super()

        this.player = new Player()

        this.currentLevelIndex = -1
        this.currLevel = undefined
        this.prevLevel = undefined
    }

    start() {
        console.log('play game state started')
        this.changeToNextLevel()
    }

    changeToNextLevel() {

        this.prevLevel = this.currLevel
        // TODO: Trigger level transition on the prevLevel (?)

        this.currentLevelIndex += 1
        this.currLevel = getAllLevels()[this.currentLevelIndex]
        this.currLevel.startTime = Globals.getTime()

        console.log('Changed to Level ', this.currLevel)
    }

    update(deltaTime) {

        if (this.currLevel) {
            this.currLevel.stateUpdate(deltaTime, this.currLevel.getLevelTime())
            this.currLevel.renderUpdate()
        }

        this.player.stateUpdate(deltaTime)
        this.player.renderUpdate()

        console.log(this.currLevel.getLevelTime())
    }

    end() {
        console.log('play game state ended')
    }
}

module.exports = Play
