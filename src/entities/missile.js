const Entity = require('./entity')

class Missile extends Entity {

    constructor(x, y) {
        super('Missile', null, 10, 10, 200, 'rgba(236, 200, 103, 1)')
        console.log(`instantiated ${ this.toString() }`)
        this.x = x
        this.y = y
    }

    stateUpdate(deltaTime) {
        super.stateUpdate(deltaTime)
        //console.log(this.toString())
        this.move(deltaTime)
        this.containWithinCanvasBounds()
    }

    renderUpdate() {
        super.renderUpdate()
    }


    move(deltaTime) {
        this.y = this.y - (this.speed * deltaTime)
    }

    containWithinCanvasBounds() {
        if (this.y < 0) {
            //once it is out of bounds, delete the object
            //I think thats what delete this does lol
            delete this
        }
    }
}

module.exports = Missile
