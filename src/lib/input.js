let _pressed = {}
let input = {}

/*
 * Define input controls. These are labels for KeyCodes.
 * http://keycode.info/
 */
input.LEFT = 37
input.UP = 38
input.RIGHT = 39
input.DOWN = 40
input.FIRE = 32 // space

input.isDown = function (keyCode) {
    return _pressed[keyCode]
}

input.onKeydown = function (event) {
    _pressed[event.keyCode] = true
}

input.onKeyup = function  (event) {
    _pressed[event.keyCode] = null
}

window.addEventListener('keyup', function (e) {
    input.onKeyup(e)
}, false)

window.addEventListener('keydown', function (e) {
    input.onKeydown(e)
}, false)

module.exports = input
