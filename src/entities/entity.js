const rand = require('../lib/rand')
const { ctx, canvas } = require('../globals')

class Entity {

    constructor(name) {
        this.name = name
        this.x = rand.int(canvas.width)
        this.y = rand.int(canvas.height)
        this.width = 25
        this.height = 25
        this.speed = 150
        this.color = 'rgba(236, 94, 103, 1)'
        this.speed = 100.0
    }

    stateUpdate() {
    }

    renderUpdate() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    toString() {
        return `${ this.name } (${this.x},${this.y}) speed=${this.speed}`
    }

}

module.exports = Entity