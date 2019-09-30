function getFragment() {
  return document.createDocumentFragment();
}
function createElement(nodeName, options) {
  let node = document.createElement(nodeName);
  options && Object.keys(options).forEach(attr => {
    node[attr] =  options[attr];
  });
  return node;
}
/**
		<h2 class="title">实现一个Topo图</h2>
		<div id="board3" class="board-container"></div>
		<div class="btns"></div>
		<div class="img-view"></div>
 */
function createBoardBox(id, title) {
  let frag = getFragment();
  let box = createElement('div', {className: 'box'});
  frag.appendChild(box);

  let h2 = createElement('h2', {innerText: title});
  box.appendChild(h2);

  let content = createElement('div', {className: 'box-content clearfix'});
  box.appendChild(content);

  let container = createElement('div', {id: id, className: 'board-container fl'});
  content.appendChild(container);

  let imgViewBox = createElement('div', {className: 'img-view fl'});
  content.appendChild(imgViewBox);

  let btnBox = createElement('div', {className: 'btns'});
  box.appendChild(btnBox);

  document.body.appendChild(frag);

  return {
    container, btnBox, imgViewBox
  };
}

let addBtn = (btnBox, title, onclick) => {
  let btn = createElement('button', {
    innerText: title, 
    onclick: function(e) {
      onclick.call(this, e);
    }
  });
  btnBox.appendChild(btn);
}

function download(href, title) {
  let a = document.createElement('a');
  a.href = href;
  a.download = title || 'canvas-' + +new Date();
  a.click();
}

module.exports = {
  getFragment, createElement, createBoardBox, addBtn, download
};