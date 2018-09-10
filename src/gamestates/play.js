//const Globals = require('../globals')
const Player = require('../entities/player')
const Gamestate = require('../lib/gamestate')
const { Level, LevelEvent } = require('../entities/level')

class Play extends Gamestate {

    constructor() {
        super()

        this.player = new Player()
        this.allLevels = [
            new Level([
                new LevelEvent(0, () => { /* spawn enemy */ })
            ])
        ]
        this.currentLevelIndex = 0
        this.currentLevel = this.allLevels[this.currentLevelIndex]
    }

    start() {
        console.log('play game state started')
    }

    update(deltaTime) {

        this.currentLevel.stateUpdate(deltaTime)
        this.player.stateUpdate(deltaTime)

        this.player.renderUpdate()
        this.currentLevel.renderUpdate()

    }

    end() {
        console.log('play game state ended')
    }
}

module.exports = Play
