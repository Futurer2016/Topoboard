
/**
 * 扩展字段方法
 * @param obj
 * @param fields
 */
function extend(obj, fields) {
  for(let key in fields) {
      let value = fields[key];
      obj[key] = value;
  }
}

/**
* 继承方法
* @param Child
* @param Parent
* @param childField
*/
function inherit(Child, Parent, childField) {
let F = function() {};
  F.prototype = Parent.prototype;
Child.prototype = new F();
  extend(Child.prototype, childField);
Object.defineProperties(Child.prototype, {
    'constructor': {
        value: Child,
          enumerable: false,
          configurable: true,
          writable: true
      }
  });
}

module.exports = {
  extend, inherit
};