const {ajax} = require('../../base/utils');

/**
 * 图片加载管理器
 * @param imgJsonUrl
 * @constructor
 */
function ImgManager({imgJsonUrl}) {
    this.imgJsonUrl = imgJsonUrl;
    this.imgs = {};
}
ImgManager.prototype.load = function(callback, loading) {
    let self = this;
    ajax({
        url: this.imgJsonUrl,
        success: function(data) {
            let imgs = data.images,
                count = 0;
            for(let key in imgs) {
                //创建图片
                self.imgs[imgs[key].name] = new Image();
                //加载图片
                self.imgs[imgs[key].name].src = imgs[key].url;
                //监听加载
                self.imgs[imgs[key].name].onload = function() {
                    count ++;
                    //加载中的回调，入参：当前对象，当前计数，总数量
                    loading && loading(self, count, imgs.length);
                    //加载完成
                    if(count == imgs.length) {
                        callback && callback(self);
                    }
                }
            }
        }
    });
};

module.exports = ImgManager;