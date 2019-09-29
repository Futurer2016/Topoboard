/**
 * 注册事件监听
 * @param {Graph|Layer|Topoboard} instance 
 * @param {*} canvas 
 * @param {String} eventType 
 * @param {Function} cb 
 */
function addEventListener(canvas, eventType, cb) {
  canvas.addEventListener(eventType, e => {
    e = e || window.event;
    cb.call(this, e);
  });
}
/**
 * 移除事件监听
 * @param {Graph|Layer|Topoboard} instance 
 * @param {String} eventType 
 * @param {Function} cb 
 */
function removeEventListener(instance, eventType, cb) {
  let eventList = instance.events[eventType];
  if(eventList && eventList.length) {
    let index = eventList.indexOf(cb);
    if(index > -1) {
      eventList.splice(index, 1);
    }
  }
}

module.exports = {
  addEventListener, removeEventListener
};