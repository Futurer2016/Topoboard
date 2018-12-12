function inherit(Child, Parent, childField) {
	var F = function() {};
    F.prototype = Parent.prototype;
	Child.prototype = new F();
    Child.prototype.constructor = Child;
    for(let key in childField) {
    	let value = childField[key];
        Child.prototype[key] = value;
	}
};

module.exports = inherit;