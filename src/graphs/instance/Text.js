const { inherit } = require('../../core/util/inherit');

const Graph = require('../../core/instance/Graph');

const Vector = require('../../core/model/Vector');
const Font = require('../../core/model/Font');

function rePosition(text) {
    let ctx = text.layer.getContext();
    let x = Math.floor((ctx.canvas.width - ctx.measureText(text.content).width) / 2);
    let y = Math.floor((ctx.canvas.height - text.font.fontSize) / 2);
    return new Vector(x, y);
}

function Text({layer, position, content, font, style, shadow, visible = true}) {
    Graph.call(this, {layer, closePath: true, style, shadow, visible});

    this.content = content;
    this.font = font || new Font(18, '微软雅黑');
    this.position = position;
}

inherit(Text, Graph, {
    fill: function() {
        let _this = this, ctx = this.drawer.ctx;
        ctx.font = _this.font.getFont();
        ctx.fillStyle = this.style;
        if(! _this.position) {
            _this.position = rePosition(_this);
        }
        ctx.fillText(_this.content, _this.position.x, _this.position.y);
        this.closePath && ctx.closePath();

        this.push('fill');
        return this;
    }
});

module.exports = Text;