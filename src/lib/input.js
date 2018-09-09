let _pressed = {}
let input = {}

input.LEFT = 37
input.UP = 38
input.RIGHT = 39
input.DOWN = 40
input.SPACE_BAR = 32

input.isDown = function (keyCode) {
    if (_pressed[keyCode]) {
        // console.log(`${ keyCode } isDown`)
    }
    return _pressed[keyCode]
}

input.onKeydown = function (event) {
    // console.log(`${ event.keyCode } onKeyDown event`)
    _pressed[event.keyCode] = true
}

input.onKeyup = function  (event) {
    //console.log(`${ event.keyCode } onKeyUp event`)
    _pressed[event.keyCode] = null
}

window.addEventListener('keyup', function (e) {
    input.onKeyup(e)
}, false)

window.addEventListener('keydown', function (e) {
    input.onKeydown(e)
}, false)

module.exports = input
