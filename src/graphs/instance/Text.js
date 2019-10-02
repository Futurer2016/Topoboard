const { inherit, extend } = require('../../core/util/inherit');

const Graph = require('../../core/instance/Graph');

const Vector = require('../../core/model/Vector');
const Font = require('../../core/model/Font');

function getCenterPosition(ctx, measure) {
    let x = ctx.canvas.width / 2;
    let y = ctx.canvas.height / 2;
    return new Vector(x, y);
}
/**
 * 获取文本位置
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Strinng} content 
 * @param {Font} font 
 * @returns {Vector}
 */
function getPosition(ctx, text) {
    let measure = ctx.measureText(text.content);
    // 函数动态计算
    if(text.position instanceof Function) {
        return text.position.call(text, ctx, measure);
    }
    // 坐标没有提供, 采用默认位置 center
    if(! text.position) {
        return getCenterPosition(ctx, measure);
    }
    // 直接提供的值
    return text.position;
}

function Text({layer, position, content, font, textAlign = 'center', textBaseline = 'middle', style, shadow, visible = true}) {
    Graph.call(this, {layer, closePath: true, style, shadow, visible});

    this.content = content;
    this.font = font || new Font({fontSize: 16, fontFamily: ''});
    this.position = position;
    this.textAlign = textAlign;
    this.textBaseline = textBaseline;
}

inherit(Text, Graph, {
    fill: function() {
        let _this = this, ctx = this.drawer.ctx;
        ctx.fillStyle = this.style;

        ctx.font = _this.font.getFont();
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.textBaseline;
        // 处理文本位置
        let p = getPosition(this.layer.getContext(), this);

        ctx.fillText(_this.content, p.x, p.y);
        this.closePath && ctx.closePath();

        this.push('fill');
        return this;
    }
});

module.exports = Text;