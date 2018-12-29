/**
 * 扩展字段方法
 * @param obj
 * @param fields
 */
function extend(obj, fields) {
    for(let key in fields) {
        let value = fields[key];
        obj[key] = value;
    }
}

/**
 * 继承方法
 * @param Child
 * @param Parent
 * @param childField
 */
function inherit(Child, Parent, childField) {
	let F = function() {};
    F.prototype = Parent.prototype;
	Child.prototype = new F();
    extend(Child.prototype, childField);
	Object.defineProperties(Child.prototype, {
	    'constructor': {
	        value: Child,
            enumerable: false,
            configurable: true,
            writable: true
        }
    });
}

/**
 * 获取xhr对象
 */
function getXhr() {
    let xhr;
    if(XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if(ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    return xhr;
}

/**
 * 获取查询字符串
 * @param data
 * @returns {string}
 */
function getQueryString(data) {
    if(! data) {
        return '';
    }
    let ret = '?';
    for(let key in data) {
        let value = data[key];
        if(data.hasOwnProperty(value)) {
            ret += key + '=' + value + '&';
        }
    }
    return ret.substr(0, ret.length - 1);
}

/**
 * ajax网络请求方法
 * @param url
 * @param method
 * @param data
 * @param success
 * @param type
 */
function ajax({url, method = 'GET', data = '', success, type = 'json'}) {
    let xhr = getXhr();
    method.toUpperCase() == 'POST' && xhr.setRequestHeader('Content-Type', 'x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            success(type == 'json'? JSON.parse(xhr.responseText): xhr.responseText);
        }
    }
    let queryStr = getQueryString(data);
    if(method.toUpperCase() == 'POST') {
        data = queryStr;
    }
    else if(method.toUpperCase() == 'GET') {
        url += queryStr;
        data = '';
    }
    xhr.open("get", url, true);
    xhr.send(data);
}

/**
 * 根据给定的元素模板
 * 生成新的canvas对象
 * canvas对象与给定的元素模板具有相同的宽度和高度
 * @param ele
 * @param newClassName
 * @returns {HTMLElement}
 */
function newCanvas(ele, newClassName) {
    let cacheCanvas = document.createElement('canvas');
    if(newClassName) {
        let className = cacheCanvas.className;
        cacheCanvas.className += (className === ''? '': ' ') + newClassName;
    }
    cacheCanvas.width = ele.width || ele.clientWidth;
    cacheCanvas.height = ele.height || ele.clientHeight;

    return cacheCanvas;
}

/**
 * 将srcCtx画布内容添加到destCtx画布中
 * @param destCtx
 * @param srcCtx
 */
function showCanvas(destCtx, srcCtx) {
    destCtx.drawImage(srcCtx.canvas, 0, 0, destCtx.canvas.width, destCtx.canvas.height);
}


module.exports = {
    extend,
    inherit,
    ajax,
    newCanvas,
    showCanvas
};