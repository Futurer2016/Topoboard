const { addEventListener, removeEventListener } = require('./events');

function drag(instance, canvas, cb) {
  let originX;
  let originY;
  let mousemove = e => {
    let x = e.offsetX;
    let y = e.offsetY;
    let dx = x - originX;
    let dy = y - originY;
    cb(dx, dy);
  }
  let mousedown = e => {
    originX = e.offsetX;
    originY = e.offsetY;
    addEventListener(instance, canvas, 'mousemove', mousemove);
  };
  let mouseup = e => {
    removeEventListener(instance, 'mousemove', mousemove);
  }
  addEventListener(instance, canvas, 'mousedown', mousedown);
  addEventListener(instance, canvas, 'mouseup', mouseup);
}

module.exports = drag;