
var prevGameState = undefined
var currGameState = undefined
var stateStarted = false

module.exports.changeGameState = (nextGameState) => {
    if (prevGameState) {
        prevGameState.end()
    }
    prevGameState = currGameState
    nextGameState.start()
    currGameState = nextGameState
}

module.exports.update = () => {
    currGameState.update()
}

module.exports.getCurrGameState = () => { return currGameState }
