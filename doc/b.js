/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("/*\n * globals.js\n *\n * 🚮 a dumping ground for stuff used all over the place 😬\n */\nconst CANVAS_ID = 'canvas0'\nconst CONFIDENCE_LEVEL = 'dev' // this is bad\n\nfunction getCanvas() {\n    return document.getElementById(CANVAS_ID)\n}\n\nfunction getCtx() {\n    return getCanvas().getContext('2d')\n}\n\n/*\n * Make sure we call this when the game starts\n */\nlet gameStartTime = undefined\nmodule.exports.gameStarted = () => {\n    gameStartTime = new Date()\n}\n\n// Time since game has started in seconds\nmodule.exports.getTime = () => {\n    return (new Date() - gameStartTime) / 1000\n}\n\nmodule.exports.colors = {\n\n    // DB32 Color Palette\n    // http://pixeljoint.com/forum/forum_posts.asp?TID=16247\n    Black: '#000000',\n    Valhalla: '#222034',\n    Loulou: '#45283c',\n    OiledCedar: '#663931',\n    Rope: '#8f563b',\n    TahitiGold: '#e97126',\n    Twine: '#d9a066',\n    Pancho: '#eec39a',\n    GoldenFizz: '#fbf236',      // Nice for bullets\n    Atlantis: '#99e550',        // Nice color for text on the terminal\n    Christi: '#6abe30',\n    ElfGreen: '#37946e',\n    Dell: '#4b692f',\n    Verdigris: '#524b24',\n    Opal: '#323c39',\n    DeepKoamaru: '#3f3f74',\n    VeniceBlue: '#306082',\n    RoyalBlue: '#5b6ee1',\n    Cornflower: '#639bff',\n    Viking: '#5fcde4',          // Nice for enemies... Maybe we'll give them a cool motif? Save pink/violets for bullets?\n    LightSteelBlue: '#cbdbfc',\n    White: '#ffffff',\n    Heather: '#9badb7',\n    Topaz: '#847e87',\n    DimGray: '#696a6a',\n    SmokeyAsh: '#595652',\n    Clairvoyant: '#76428a',\n    Red: '#ac3232',           // Player color. Let's make the player motif warm.\n    Mandy: '#d95763',\n    Plum: '#d77bba',\n    RainForest: '#8f974a',\n    Stinger: '#8a6f30',\n}\n\nmodule.exports.CANVAS_ID = CANVAS_ID\nmodule.exports.CONFIDENCE_LEVEL = CONFIDENCE_LEVEL\nmodule.exports.getCanvas = getCanvas\nmodule.exports.getCtx = getCtx\n\nmodule.exports.utils = {\n\n}\n\n// It's web safe and monospace\nmodule.exports.typeface = 'Courier New'\n\n/*\n * Render methods that are commonly used\n *\n * These probably need to be called in an update() or render() function (preferably the latter!)\n */\nmodule.exports.render = {\n\n    // Render some text on the screen\n    text(text, opts = {}) {\n\n        opts = Object.assign({\n            fillStyle: module.exports.colors.Atlantis,\n            size: '30px',\n            typeface: module.exports.typeface,\n            x: 0,\n            y: 0\n        }, opts)\n\n        let ctx = getCtx()\n\n        ctx.fillStyle = opts.fillStyle\n        ctx.font = `${opts.size} ${opts.typeface}`\n        ctx.fillText(text, opts.x, opts.y)\n\n    }\n\n}\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/globals.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/globals.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("const rand = __webpack_require__(11)\nconst Globals = __webpack_require__(0)\n\nclass Entity {\n\n    constructor(name, renderUpdateOverride, width, height, speed, color) {\n        this.name = name\n        this.x = rand.int(Globals.getCtx().canvas.width)\n        this.y = rand.int(Globals.getCtx().canvas.height)\n        this.width = width\n        this.height = height\n        this.speed = speed\n        this.color = color\n\n        if (renderUpdateOverride) {\n            // Woah, is this overriding the method? I wonder if this works lol\n            this.renderUpdate = renderUpdateOverride\n        }\n    }\n\n    stateUpdate(deltaTime) {\n        deltaTime // eslint 🙃\n    }\n\n    renderUpdate() {\n        Globals.getCtx().fillStyle = this.color\n        Globals.getCtx().fillRect(this.x, this.y, this.width, this.height)\n    }\n\n    toString() {\n        return `${ this.name } (${this.x},${this.y}) speed=${this.speed}`\n    }\n\n}\n\nmodule.exports = Entity\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/entities/entity.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/entities/entity.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("var prevGameState = undefined\nvar currGameState = undefined\n\nmodule.exports.changeGameState = (nextGameState) => {\n    console.log('change gamestate from ', currGameState, 'to', nextGameState)\n    if (prevGameState) {\n        prevGameState.end()\n    }\n    prevGameState = currGameState\n    nextGameState.start()\n    currGameState = nextGameState\n}\n\nmodule.exports.update = (deltaTime) => {\n    currGameState.update(deltaTime)\n}\n\nmodule.exports.getCurrGameState = () => { return currGameState }\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/gamestate-manager.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/gamestate-manager.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("/*\n * Bundle up a bunch of stuff here\n */\nclass Gamestate {\n\n    constructor() {\n    }\n\n    // Called when the Gamestate begins\n    start(){}\n\n    // Called once per frame\n    update(){}\n\n    // Called when the Gamestate ends\n    end(){}\n}\n\nmodule.exports = Gamestate\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/gamestate.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/gamestate.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("let _pressed = {}\nlet input = {}\n\n/*\n * Define input controls. These are labels for KeyCodes.\n * http://keycode.info/\n */\ninput.LEFT = 37\ninput.UP = 38\ninput.RIGHT = 39\ninput.DOWN = 40\ninput.FIRE = 32 // space bar\n\ninput.isDown = function (keyCode) {\n    return _pressed[keyCode]\n}\n\ninput.onKeydown = function (event) {\n    // console.log(`${ event.keyCode } onKeyDown event`)\n    _pressed[event.keyCode] = true\n}\n\ninput.onKeyup = function  (event) {\n    _pressed[event.keyCode] = null\n}\n\nwindow.addEventListener('keyup', function (e) {\n    input.onKeyup(e)\n}, false)\n\nwindow.addEventListener('keydown', function (e) {\n    input.onKeydown(e)\n}, false)\n\nmodule.exports = input\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/input.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/input.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * main.js\n *\n * The entry point for the game. The first lines of code executed are at the bottom of the file (ignoring requires)\n */\nconst Globals = __webpack_require__(0)\nconst gamestate = __webpack_require__(2)\nconst loop = __webpack_require__(6)\nconst Boot = __webpack_require__(8)\n\nfunction createCanvas() {\n    let canvas = document.createElement('canvas')\n    canvas.setAttribute('id', Globals.CANVAS_ID)\n    canvas.width = 640\n    canvas.height = 480\n    canvas.style.backgroundColor = Globals.colors.Black\n    document.body.appendChild(canvas)\n\n    // Create instructions\n    var para = document.createElement('P')\n    var missileInstructions = document.createTextNode('press space bar to fire')\n    para.appendChild(missileInstructions)\n    document.body.appendChild(para)\n    //let ctx = canvas.getContext('2d')\n    console.log('canvas created', canvas)\n}\n\n/*\n * The Game Loop ⚡️ - Called once per frame\n *\n * deltaTime is the timeOfLastMissile between frames\n * If your code is running in update and does things over timeOfLastMissile, it likely needs to be relative to deltaTime\n */\nfunction TheGameLoop (deltaTime) {\n    let ctx = Globals.getCtx()\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)\n    gamestate.update(deltaTime)\n}\n\n/*\n * The entry point to the game! 🎉\n */\nconsole.log('Hello world! -- The game has started')\ngamestate.changeGameState(new Boot())\ncreateCanvas()\nloop.start(TheGameLoop)\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/main.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("let Globals = __webpack_require__(0)\n\nvar lastTime = timestamp()\nvar stats\n\nif (Globals.CONFIDENCE_LEVEL == 'dev') {\n    stats = __webpack_require__(7)(0)\n    document.body.appendChild(stats.dom)\n}\n\nfunction timestamp () {\n    return window.performance && window.performance.now ?\n    window.performance.now() :\n    Date.now()\n}\n\nfunction raf (fn) {\n    return window.requestAnimationFrame(function () {\n        stats && stats.begin()\n\n        var now = timestamp()\n        var deltaTime = now - lastTime\n\n        if (deltaTime > 999) {\n            deltaTime = 1 / 60\n        } else {\n            deltaTime /= 1000\n        }\n\n        lastTime = now\n\n        fn(deltaTime)\n\n        stats && stats.end()\n    })\n}\n\nexports.start = function (fn) {\n    return raf(function tick (deltaTime) {\n        fn(deltaTime)\n        raf(tick)\n    })\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/loop.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/loop.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("// stats.js - http://github.com/mrdoob/stats.js\nvar Stats=function(){function h(a){c.appendChild(a.dom);return a}function k(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();k(++l%c.children.length)},!1);var g=(performance||Date).now(),e=g,a=0,r=h(new Stats.Panel(\"FPS\",\"#0ff\",\"#002\")),f=h(new Stats.Panel(\"MS\",\"#0f0\",\"#020\"));\nif(self.performance&&self.performance.memory)var t=h(new Stats.Panel(\"MB\",\"#f08\",\"#201\"));k(0);return{REVISION:16,dom:c,addPanel:h,showPanel:k,begin:function(){g=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();f.update(c-g,200);if(c>e+1E3&&(r.update(1E3*a/(c-e),100),e=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){g=this.end()},domElement:c,setMode:k}};\nStats.Panel=function(h,k,l){var c=Infinity,g=0,e=Math.round,a=e(window.devicePixelRatio||1),r=80*a,f=48*a,t=3*a,u=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=f;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,f);b.fillStyle=k;b.fillText(h,t,u);b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(f,\nv){c=Math.min(c,f);g=Math.max(g,f);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=k;b.fillText(e(f)+\" \"+h+\" (\"+e(c)+\"-\"+e(g)+\")\",t,u);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,e((1-f/v)*p))}}};\"object\"===typeof module&&(module.exports=Stats);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/stats.js/build/stats.min.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/stats.js/build/stats.min.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

eval("const gamestate = __webpack_require__(2)\nconst Globals = __webpack_require__(0)\nconst Gamestate = __webpack_require__(3)\nconst Play = __webpack_require__(9)\nconst Input = __webpack_require__(4)\n\nfunction renderMainMenu() {\n\n    Globals.render.text('Name TBD', { x: 10, y: 50, size: '30px' })\n    Globals.render.text('js13k 2018', { x: 10, y: 75, size: '15px' })\n    Globals.render.text('press space bar to play', { x: 10, y: 100, size: '10px '})\n\n}\n\nclass Boot extends Gamestate {\n\n    start() {\n        console.log('boot game state started')\n    }\n\n    update() {\n\n        if (Input.isDown(Input.FIRE)) {\n            gamestate.changeGameState(new Play())\n            return\n        }\n\n        // TODO: draw main menu\n        renderMainMenu()\n\n    }\n\n    end() {\n        console.log('boot game state ended')\n    }\n\n}\n\nmodule.exports = Boot\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/gamestates/boot.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/gamestates/boot.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

eval("const Globals = __webpack_require__(0)\nconst Player = __webpack_require__(10)\nconst Gamestate = __webpack_require__(3)\nconst { Level, LevelEvent, getAllLevels } = __webpack_require__(13)\n\nclass Play extends Gamestate {\n\n    constructor() {\n        super()\n\n        this.player = new Player()\n        this.allLevels = [\n            new Level([\n                new LevelEvent(0, () => { /* spawn enemy */ })\n            ])\n        ]\n        this.currentLevelIndex = -1\n        this.currLevel = undefined\n        this.prevLevel = undefined\n    }\n\n    start() {\n        console.log('play game state started')\n        this.changeToNextLevel()\n    }\n\n    getLevelTime() {\n        return (new Date() - this.currentLevelStart) / 1000\n    }\n\n    changeToNextLevel() {\n\n        if (this.currLevel) {\n            this.prevLevel = this.currLevel\n            // TODO: Trigger level transition on the prevLevel?\n        }\n\n        this.currentLevelIndex++\n        this.currLevel = getAllLevels()[this.currentLevelIndex]\n        this.currentLevelStart = Globals.getTime()\n\n        console.log(`Changed to Level ${ this.currentLevelIndex }`)\n    }\n\n    update(deltaTime) {\n\n        if (this.currLevel) {\n            this.currLevel.stateUpdate(deltaTime)\n            this.currLevel.renderUpdate()\n        }\n\n        this.player.stateUpdate(deltaTime)\n        this.player.renderUpdate()\n\n    }\n\n    end() {\n        console.log('play game state ended')\n    }\n}\n\nmodule.exports = Play\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/gamestates/play.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/gamestates/play.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

eval("const Entity = __webpack_require__(1)\nconst Globals = __webpack_require__(0)\nconst input = __webpack_require__(4)\nconst Missile = __webpack_require__(12)\n\nclass Player extends Entity {\n\n    constructor() {\n        super('Player', null, 25, 25, 150, Globals.colors.Red)\n        console.log(`instantiated ${ this.toString() }`)\n        this.x = 320\n        this.y = 400\n        this.missiles = []\n        this.timeOfLastMissile = Date.now()\n    }\n\n    stateUpdate(deltaTime) {\n        super.stateUpdate(deltaTime)\n        this.handleInput(deltaTime)\n        this.containWithinCanvasBounds()\n        this.renderMissiles(deltaTime)\n    }\n\n    renderUpdate() {\n        super.renderUpdate()\n    }\n\n    handleInput(deltaTime) {\n\n        // Movement\n        if (input.isDown(input.LEFT)) {\n            this.x = this.x - (this.speed * deltaTime)\n        }\n        if (input.isDown(input.RIGHT)) {\n            this.x = this.x + (this.speed * deltaTime)\n        }\n        if (input.isDown(input.UP)) {\n            this.y = this.y - (this.speed * deltaTime)\n        }\n        if (input.isDown(input.DOWN)) {\n            this.y = this.y + (this.speed * deltaTime)\n        }\n\n        // Fire\n        if (input.isDown(input.FIRE)) {\n            this.shootMissile()\n        }\n    }\n\n    containWithinCanvasBounds() {\n        let canvas = Globals.getCtx().canvas\n\n        if (this.x < 0) {\n            this.x = canvas.width\n        } else if (this.x > canvas.width) {\n            this.x = 0\n        }\n        if (this.y < 0) {\n            this.y = canvas.height\n        } else if (this.y > canvas.height) {\n            this.y = 0\n        }\n    }\n\n    renderMissiles(deltaTime) {\n        for(var i = 0; i < this.missiles.length; i++) {\n            if (this.missiles[i] != null) {\n                this.missiles[i].stateUpdate(deltaTime)\n                this.missiles[i].renderUpdate()\n            }\n        }\n    }\n\n    shootMissile() {\n        var cooldown = 200\n        let currentTime = Date.now()\n        if(currentTime - this.timeOfLastMissile > cooldown) {\n            this.missiles.push(new Missile(this.x, this.y))\n            this.timeOfLastMissile = currentTime\n        }\n    }\n}\n\nmodule.exports = Player\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/entities/player.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/entities/player.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("var seed = 0\n\nfunction random () {\n    var x = Math.sin(.8765111159592828 + seed++) * 10000\n\n    return x - Math.floor(x)\n}\n\n/**\n * Return an integer within [0, max).\n *\n * @param  {int} [max]\n * @return {int}\n */\nexports.int = function (max) {\n    return random() * (max || 0xfffffff) | 0\n}\n\n/**\n * Return a float within [0.0, 1.0).\n *\n * @return {float}\n */\nexports.float = function () {\n    return random()\n}\n\n/**\n * Return a boolean.\n *\n * @return {Boolean}\n */\nexports.bool = function () {\n    return random() > 0.5\n}\n\n/**\n * Return an integer within [min, max).\n *\n * @param  {int} min\n * @param  {int} max\n * @return {int}\n */\nexports.range = function (min, max) {\n    return this.int(max - min) + min\n}\n\n/**\n * Pick an element from the source.\n *\n * @param  {mixed[]} source\n * @return {mixed}\n */\nexports.pick = function (source) {\n    return source[this.range(0, source.length)]\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/rand.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/rand.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

eval("const Entity = __webpack_require__(1)\nconst Globals = __webpack_require__(0)\n\nclass Missile extends Entity {\n\n    constructor(x, y) {\n        super('Missile', null, 10, 10, 200, Globals.colors.GoldenFizz)\n        //console.log(`instantiated ${ this.toString() }`)\n        this.x = x\n        this.y = y\n    }\n\n    stateUpdate(deltaTime) {\n        super.stateUpdate(deltaTime)\n        //console.log(this.toString())\n        this.move(deltaTime)\n        this.containWithinCanvasBounds()\n    }\n\n    renderUpdate() {\n        super.renderUpdate()\n    }\n\n\n    move(deltaTime) {\n        this.y = this.y - (this.speed * deltaTime)\n    }\n\n    containWithinCanvasBounds() {\n        if (this.y < 0) {\n            //once it is out of bounds, delete the object\n            //I think thats what delete this does lol\n            delete this\n        }\n    }\n}\n\nmodule.exports = Missile\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/entities/missile.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/entities/missile.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * Level\n *\n * Code that has to do with levels. Lol.\n *\n * class Level: A list of LevelEvents.\n * class LevelEvent: A LevelEvent does something at a certain time.\n * getAllLevels(): Get all of the levels defined for the game!\n */\n\nconst Entity = __webpack_require__(1)\n\nclass LevelEvent {\n\n    /*\n     * LevelEvent(time, event)\n     *\n     * levelTime - The time to fire the event relative to the level's start time\n     * event     - A function to fire at the specified LevelTime\n     */\n    constructor(levelTime, event) {\n        this.levelTime = levelTime\n        this.event = event\n    }\n\n}\n\nclass Level extends Entity {\n\n    constructor(levelEvents) {\n        super()\n        this.levelEvents = levelEvents\n        this.isComplete = false\n    }\n\n    stateUpdate(deltaTime) { deltaTime }\n\n    renderUpdate(deltaTime) { deltaTime }\n\n    // Returns true if the player beat the level, else returns false\n    getIsComplete() {\n        return this.isComplete\n    }\n\n}\n\nmodule.exports.Level = Level\nmodule.exports.LevelEvent = LevelEvent\n\nlet allLevels = undefined\nmodule.exports.getAllLevels = () => {\n    if (allLevels == undefined) {\n        allLevels = [\n            new Level([ new LevelEvent(0, () => {}) ])\n        ]\n    }\n    return allLevels\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/entities/level.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/entities/level.js?");

/***/ })
/******/ ]);