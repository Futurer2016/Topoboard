const {ajax} = require('../../base/utils');

/**
 * 图片加载管理器
 * @param imgJsonUrl
 * @constructor
 */
function ImgManager({imgJsonUrl}) {
    this.imgJsonUrl = imgJsonUrl;
    this.imgs = [];
}
ImgManager.prototype.load = function(callback, loading) {
    let self = this;
    ajax({
        url: this.imgJsonUrl,
        success: function(data) {
            let imgs = data.images, count = 0;
            for(let key in imgs) {
                self.imgs[imgs[key].name] = new Image();

                self.imgs[imgs[key].name].src = imgs[key].url;

                self.imgs[imgs[key].name].onload = function() {
                    count ++;
                    //加载中的回调，入参：当前对象，当前计数，总数量
                    loading && loading(self, count, imgs.length);
                    if(count == imgs.length) {
                        callback && callback(self);
                    }
                }
            }
        }
    });
};

module.exports = ImgManager;