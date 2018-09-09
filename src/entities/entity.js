const rand = require('../lib/rand')
const Globals = require('../globals')

class Entity {

    constructor(name, renderUpdateOverride, width, height, speed, color) {
        this.name = name
        this.x = rand.int(Globals.getCtx().canvas.width)
        this.y = rand.int(Globals.getCtx().canvas.height)
        this.width = width
        this.height = height
        this.speed = speed
        this.color = color

        if (renderUpdateOverride) {
            // Woah, is this overriding the method? I wonder if this works lol
            this.renderUpdate = renderUpdateOverride
        }
    }

    stateUpdate(deltaTime) {
        deltaTime // eslint 🙃
    }

    renderUpdate() {
        Globals.getCtx().fillStyle = this.color
        Globals.getCtx().fillRect(this.x, this.y, this.width, this.height)
    }

    toString() {
        return `${ this.name } (${this.x},${this.y}) speed=${this.speed}`
    }

}

module.exports = Entity