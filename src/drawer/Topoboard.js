const Board = require('./Board.js');
const Scene = require('./Scene');
const Layer = require('./Layer');
const Circle = require('./shapes/Circle');
const PolyLine = require('./shapes/PolyLine');
const Rect = require('./shapes/Rect');
const ImgManager = require('./shapes/ImgManager');

function factory() {
    return {
        Board, Scene, Layer, Circle, PolyLine, Rect
    };
}
if(typeof define == 'function' && define.amd) {
    define('Topoboard', factory);
}
if(window) {
    window['Topoboard'] = factory();
}

module.exports = factory();