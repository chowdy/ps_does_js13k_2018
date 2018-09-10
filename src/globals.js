/*
 * globals.js
 *
 * 🚮 a dumping ground for stuff used all over the place 😬
 */
const CANVAS_ID = 'canvas0'
const CONFIDENCE_LEVEL = 'dev' // this is bad

function getCanvas() {
    return document.getElementById(CANVAS_ID)
}

function getCtx() {
    return getCanvas().getContext('2d')
}

module.exports.colors = {

    // DB32 Color Palette
    // http://pixeljoint.com/forum/forum_posts.asp?TID=16247
    Black: '#000000',
    Valhalla: '#222034',
    Loulou: '#45283c',
    OiledCedar: '#663931',
    Rope: '#8f563b',
    TahitiGold: '#e97126',
    Twine: '#d9a066',
    Pancho: '#eec39a',
    GoldenFizz: '#fbf236',      // Nice for bullets
    Atlantis: '#99e550',        // Nice color for text on the terminal
    Christi: '#6abe30',
    ElfGreen: '#37946e',
    Dell: '#4b692f',
    Verdigris: '#524b24',
    Opal: '#323c39',
    DeepKoamaru: '#3f3f74',
    VeniceBlue: '#306082',
    RoyalBlue: '#5b6ee1',
    Cornflower: '#639bff',
    Viking: '#5fcde4',          // Nice for enemies... Maybe we'll give them a cool motif? Save pink/violets for bullets?
    LightSteelBlue: '#cbdbfc',
    White: '#ffffff',
    Heather: '#9badb7',
    Topaz: '#847e87',
    DimGray: '#696a6a',
    SmokeyAsh: '#595652',
    Clairvoyant: '#76428a',
    Red: '#ac3232',           // Player color. Let's make the player motif warm.
    Mandy: '#d95763',
    Plum: '#d77bba',
    RainForest: '#8f974a',
    Stinger: '#8a6f30',
}

module.exports.CANVAS_ID = CANVAS_ID
module.exports.CONFIDENCE_LEVEL = CONFIDENCE_LEVEL
module.exports.getCanvas = getCanvas
module.exports.getCtx = getCtx

module.exports.utils = {

}

// It's web safe and monospace
module.exports.typeface = 'Courier New'

/*
 * Render methods that are commonly used
 *
 * These probably need to be called in an update() or render() function (preferably the latter!)
 */
module.exports.render = {

    // Render some text on the screen
    text(text, opts = {}) {

        opts = Object.assign({
            fillStyle: module.exports.colors.Atlantis,
            size: '30px',
            typeface: module.exports.typeface,
            x: 0,
            y: 0
        }, opts)

        let ctx = getCtx()

        ctx.fillStyle = opts.fillStyle
        ctx.font = `${opts.size} ${opts.typeface}`
        ctx.fillText(text, opts.x, opts.y)

    }

}


