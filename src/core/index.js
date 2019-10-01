const { extend } = require('./util/inherit');
const Animation = require('./util/Animation');
const ImgManager = require('./util/ImgManager');

const Topoboard = require('./instance/Topoboard');

const Layer = require('./instance/Layer');

const Expand = require('./model/Expand');
const Font = require('./model/Font');
const LinearGradient = require('./model/LinearGradient');
const Radial = require('./model/Radial');
const RadialGradient = require('./model/RadialGradient');
const Shadow = require('./model/Shadow');
const Vector = require('./model/Vector');

let model = { Expand, Font, LinearGradient, Radial, RadialGradient, Shadow, Vector };

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
