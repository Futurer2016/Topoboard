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
  else {
    throw new Error('There is no xhr Constructor such as [XMLHttpRequest] or [ActiveXObject]');
  }

  return xhr;
};

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

module.exports = ajax;