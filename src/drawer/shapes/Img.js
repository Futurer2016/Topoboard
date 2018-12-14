const Graph = require('./Graph');
const {inherit} = require('../../base/utils');

/**
 *
 * @param imageJson
 * @param src @type CutParams
 * @param dst @type CutParams
 * @constructor
 */
function Img({layer, image, src, dst, shadow}) {
    Graph.call(this, {layer, closePath: false, shadow});

    this.image = image;
    this.src = src;
    this.dst = dst;
}
inherit(Img, Graph, {
    //添加图片
    draw: function () {
        this.drawer.ctx.drawImage(this.image, this.dst.x, this.dst.y, this.dst.w, this.dst.h);

        this.push('draw');
        return this;
    },
    //裁剪图片
    cut: function() {
        this.drawer.ctx.drawImage(this.image, this.src.x, this.src.y, this.src.w, this.src.h, this.dst.x, this.dst.y, this.dst.w, this.dst.h);

        this.push('cut');
        return this;
    }
});

module.exports = Img;