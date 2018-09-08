const rand = require('../lib/rand')
const Globals = require('../globals')

class Entity {

    constructor(name, renderUpdateOverride) {
        this.name = name
        this.x = rand.int(Globals.getCtx().canvas.width)
        this.y = rand.int(Globals.getCtx().canvas.height)
        this.width = 25
        this.height = 25
        this.speed = 150
        this.color = 'rgba(236, 94, 103, 1)'
        this.speed = 100

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