const { inherit } = require('../../core/util/inherit');
const Graph = require('../../core/instance/Graph');

//折线
function PolyLine({layer, path, width = 1, style, closePath, shadow}) {
    Graph.call(this, {layer, closePath, style, shadow});

    if(! path) {
        throw Error('path 属性不能为空');
    }

	this.path = path;
	this.width = width;
}
inherit(PolyLine, Graph, {
    stroke: function() {
        let self = this;
        this.drawer.stroke(function(ctx) {
            let path = self.path;
            ctx.moveTo(path[0].x, path[0].y);
            path.forEach(function(vector, key) {
                if(key > 0) {
                    ctx.lineTo(vector.x, vector.y);
                }
            });
            ctx.lineWidth = self.width;
            ctx.lineCap = "round";
        });

        this.push('stroke');
        return this;
    },
    fill: function() {
        let self = this;
        this.drawer.fill(function(ctx) {
            let path = self.path;
            ctx.moveTo(path[0].x, path[0].y);
            path.forEach(function(vector, key) {
                if(key > 0) {
                    ctx.lineTo(vector.x, vector.y);
                }
            });
            ctx.lineWidth = self.width;
            ctx.lineCap = "round";
        });

        this.push('fill');
        return this;
    }
});

module.exports = PolyLine;