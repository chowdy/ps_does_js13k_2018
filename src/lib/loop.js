let Globals = require('../globals')

var lastTime = timestamp()
var stats

if (Globals.CONFIDENCE_LEVEL == 'dev') {
    stats = require('stats.js')(0)
    document.body.appendChild(stats.dom)
}

function timestamp () {
    return window.performance && window.performance.now ?
    window.performance.now() :
    Date.now()
}

function raf (fn) {
    return window.requestAnimationFrame(function () {
        stats && stats.begin()

        var now = timestamp()
        var deltaTime = now - lastTime

        if (deltaTime > 999) {
            deltaTime = 1 / 60
        } else {
            deltaTime /= 1000
        }

        lastTime = now

        fn(deltaTime)

        stats && stats.end()
    })
}

exports.start = function (fn) {
    return raf(function tick (deltaTime) {
        fn(deltaTime)
        raf(tick)
    })
}
