const {inherit} = require('../../core/util/inherit');
const Graph = require('../../core/instance/Graph');

/**
 *
 * @param imageJson
 * @param src @type Expand
 * @param dest @type Expand
 * @constructor
 */
function Img({layer, image, src, dest, shadow, visible = true}) {
    Graph.call(this, {layer, closePath: false, shadow, visible});
    
    this.image = image;
    this.src = src;
    this.dest = dest;
}
inherit(Img, Graph, {
    //添加图片
    draw: function () {
        if(this.src) {
            this.drawer.ctx.drawImage(
                this.image,
                this.src.x, this.src.y, this.src.w, this.src.h,
                this.dest.x, this.dest.y, this.dest.w, this.dest.h
            );
        }
        else if(this.dest) {
            this.drawer.ctx.drawImage(this.image, this.dest.x, this.dest.y, this.dest.w, this.dest.h);
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