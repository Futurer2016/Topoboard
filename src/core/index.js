const { extend } = require('./util/inherit');
const Animation = require('./util/Animation');
const ImgManager = require('./util/ImgManager');

const Topoboard = require('./instance/Topoboard');

const Layer = require('./instance/Layer');

const Vector = require('./model/Vector');
const Expand = require('./model/Expand');
const Shadow = require('./model/Shadow');
const Font = require('./model/Font');

let model = { Vector, Expand, Shadow, Font };

extend(Topoboard, {
  Animation, ImgManager, 
  Layer, 
  model
});

/**
* 暴露全局变量
*/
if(window) {
  window['TB'] = window['Topoboard'] = Topoboard;
}

/**
 * AMD模式
 */
if(typeof define == 'function' && define.amd) {
  define('Topoboard', () => Topoboard);
}

module.exports =  Topoboard;
