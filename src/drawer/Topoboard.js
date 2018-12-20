const CutParams = require('./component/CutParams');
const Shadow = require('./component/Shadow');

const ImgManager = require('./shapes/ImgManager');

const Board = require('./Board.js');
const Animation = require('./Animation');
const Layer = require('./Layer');
const Circle = require('./shapes/Circle');
const PolyLine = require('./shapes/PolyLine');
const Rect = require('./shapes/Rect');
const Img = require('./shapes/Img');
const Text = require('./shapes/Text');

function factory() {
    return {
        Board, Animation, Layer, Circle, PolyLine, Rect, Img, Text,
        ImgManager,
        CutParams, Shadow
    };
}
if(typeof define == 'function' && define.amd) {
    define('Topoboard', factory);
}
if(window) {
    window['Topoboard'] = factory();
}

module.exports = factory();