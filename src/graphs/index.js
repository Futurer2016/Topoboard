const { extend } = require('../core/util/inherit');
const Topoboard = require('../core/index');

const Circle = require('./instance/Circle');
const Img = require('./instance/Img');
const PolyLine = require('./instance/PolyLine');
const Rect = require('./instance/Rect');
const Text = require('./instance/Text');


extend(Topoboard, {
  graphs: {Circle, Img, PolyLine, Rect, Text}
});