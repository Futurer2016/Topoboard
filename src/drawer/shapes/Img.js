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
        if(this.src) {
            this.drawer.ctx.drawImage(
                this.image,
                this.src.x, this.src.y, this.src.w, this.src.h,
                this.dst.x, this.dst.y, this.dst.w, this.dst.h
            );
        }
        else if(this.dst) {
            this.drawer.ctx.drawImage(this.image, this.dst.x, this.dst.y, this.dst.w, this.dst.h);
        }
        else {
            this.drawer.ctx.drawImage(this.image, 0, 0, this.layer.getContext().canvas.width, this.layer.getContext().canvas.height);
        }

        this.push('draw');
        return this;
    },
    //绘制重复平铺的图片
    repeat: function() {

    }
});

module.exports = Img;