const Graph = require('./Graph');
const {inherit} = require('../../base/utils');
//折线
function PolyLine({layer, axis, width, color, closePath, shadow}) {
    Graph.call(this, {layer, closePath, color, shadow});

	this.axis = axis;
	this.width = width || 1;
}
inherit(PolyLine, Graph, {
    stroke: function() {
        let self = this;
        this.drawer.stroke(function(ctx) {
            let axis = self.axis;
            ctx.moveTo(axis[0].x, axis[0].y);
            axis.forEach(function(vector, key) {
                if(key > 0) {
                    ctx.lineTo(vector.x, vector.y);
                }
            });
            ctx.strokeStyle = self.color;
            ctx.lineWidth = self.width;
            ctx.lineCap = "round";
            self.closePath && ctx.closePath();
        });

        this.push('stroke');
        return this;
    },
    fill: function() {
        let self = this;
        this.drawer.fill(function(ctx) {
            let axis = self.axis;
            ctx.moveTo(axis[0].x, axis[0].y);
            axis.forEach(function(vector, key) {
                if(key > 0) {
                    ctx.lineTo(vector.x, vector.y);
                }
            });
            ctx.fillStyle = self.color;
            ctx.lineWidth = self.width;
            ctx.lineCap = "round";
            self.closePath && ctx.closePath();
        });

        this.push('fill');
        return this;
    }
});

module.exports = PolyLine;