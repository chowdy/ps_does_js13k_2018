let key = require('../lib/input')
let rand = require('../lib/rand')
let globals = require('../globals')
let ctx = globals.ctx
let canvas = globals.canvas

// demo entity
var mob = {
    x: rand.int(canvas.width),
    y: rand.int(canvas.height),
    width: 25,
    height: 25,
    speed: 150,
    color: 'rgba(236, 94, 103, 1)'
};

module.exports = {

    start() {
        console.log('boot game state started')
    },

    update(dt) {

        // update mob
        if (key.isDown(key.LEFT)) {
            mob.x = mob.x - (mob.speed * dt);
        }
        if (key.isDown(key.RIGHT)) {
            mob.x = mob.x + (mob.speed * dt);
        }
        if (key.isDown(key.UP)) {
            mob.y = mob.y - (mob.speed * dt);
        }
        if (key.isDown(key.DOWN)) {
            mob.y = mob.y + (mob.speed * dt);
        }

        // check bounds collisions
        if (mob.x < 0) {
            mob.x = canvas.width;
        } else if (mob.x > canvas.width) {
            mob.x = 0;
        }
        if (mob.y < 0) {
            mob.y = canvas.height;
        } else if (mob.y > canvas.height) {
            mob.y = 0;
        }

        // draw mob
        ctx.fillStyle = mob.color;
        ctx.fillRect(mob.x, mob.y, mob.width, mob.height);

    },

    end() {
        console.log('boot game state ended')
    }
}
