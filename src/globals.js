
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