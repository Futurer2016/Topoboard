const Graph = require('./Graph');
const {inherit} = require('../../base/utils');
//折线
function PolyLine({layer, axis, width, color, closePath}) {
    Graph.call(this, layer, closePath);

	this.axis = axis;
	this.width = width || 1;
	this.color = color;
}
inherit(PolyLine, Graph, {
    stroke: function() {
        var self = this;
        this.drawer.stroke(function(ctx) {
            var axis = self.axis;
            ctx.moveTo(axis[0][0], axis[0][1]);
            axis.forEach(function(value, key) {
                if(key > 0) {
                    ctx.lineTo(value[0], value[1]);
                }
            });
            self.closePath && ctx.closePath();
        }, function(ctx) {
            ctx.strokeStyle = self.color;
            ctx.lineWidth = self.width;
            ctx.lineCap = "round";
        });

        this.push('stroke');
        return this;
    },
    fill: function() {
        var self = this;
        this.drawer.fill(function(ctx) {
            var axis = self.axis;
            ctx.moveTo(axis[0][0], axis[0][1]);
            axis.forEach(function(value, key) {
                if(key > 0) {
                    ctx.lineTo(value[0], value[1]);
                }
            });
            self.closePath && ctx.closePath();
        }, function(ctx) {
            ctx.fillStyle = self.color;
            ctx.lineWidth = self.width;
            ctx.lineCap = "round";
        });

        this.push('fill');
        return this;
    }
});

module.exports = PolyLine;