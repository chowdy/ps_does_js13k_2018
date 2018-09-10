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

module.exports.CANVAS_ID = CANVAS_ID
module.exports.CONFIDENCE_LEVEL = CONFIDENCE_LEVEL
module.exports.getCanvas = getCanvas
module.exports.getCtx = getCtx

module.exports.utils = {

}

module.exports.render = {

    // Render some text on the screen
    text(text, opts = {}) {
        text; opts
    }
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
    GoldenFizz: '#fbf236',
    Atlantis: '#99e550',
    Christi: '#6abe30',
    ElfGreen: '#37946e',
    Dell: '#4b692f',
    Verdigris: '#524b24',
    Opal: '#323c39',
    DeepKoamaru: '#3f3f74',
    VeniceBlue: '#306082',
    RoyalBlue: '#5b6ee1',
    Cornflower: '#639bff',
    Viking: '#5fcde4',
    LightSteelBlue: '#cbdbfc',
    White: '#ffffff',
    Heather: '#9badb7',
    Topaz: '#847e87',
    DimGray: '#696a6a',
    SmokeyAsh: '#595652',
    Clairvoyant: '#76428a',
    Brown: '#ac3232',
    Mandy: '#d95763',
    Plum: '#d77bba',
    RainForest: '#8f974a',
    Stinger: '#8a6f30',
}

// It's web safe and monospace
module.exports.font = 'Courier New'
