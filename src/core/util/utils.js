
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

/**
 * 根据给定的元素模板
 * 生成新的canvas对象
 * canvas对象与给定的元素模板具有相同的宽度和高度
 * @param el
 * @param newClassName
 * @returns {HTMLElement}
 */
function newCanvas(el, newClassName) {
    let cacheCanvas = document.createElement('canvas');
    if(newClassName) {
        cacheCanvas.className += (cacheCanvas.className? ' ': '') + newClassName;
    }
    cacheCanvas.width = el.width || el.clientWidth;
    cacheCanvas.height = el.height || el.clientHeight;

    return cacheCanvas;
}

function getContext(canvas, alpha) {
    let ctx;
    if(alpha) {
        //隐藏canvas上下文
        ctx = canvas.getContext('2d');
    }
    //不透明的画布
    else {
        //隐藏canvas上下文
        ctx = canvas.getContext('2d', {alpha: false});
    }
    return ctx;
}

/**
 * 将srcCtx画布内容添加到destCtx画布中
 * @param destCtx
 * @param srcCtx
 */
function showCanvas(destCtx, srcCtx) {
    destCtx.drawImage(srcCtx.canvas, 0, 0, destCtx.canvas.width, destCtx.canvas.height);
}

function snapshot(canvas, title) {
    //导出画板数据
    return canvas.toDataURL();
}

function download(href, title) {
    let a = document.createElement('a');
    a.href = href;
    a.download = title || 'canvas-' + +new Date();
    a.click();
}


module.exports = {
    //创建新的canvas对象
    newCanvas,
    //获取canvas上下文
    getContext,
    //将srcCtx画布内容添加到destCtx画布中
    showCanvas,
    //快照
    snapshot,
    //下载
    download
};