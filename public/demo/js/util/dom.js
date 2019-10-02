function download(href, title) {
  let a = document.createElement('a');
  a.href = href;
  a.download = title || 'canvas-' + +new Date();
  a.click();
}

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

let addEl = (box, type, options) => {
  let el = createElement(type, options);
  box.appendChild(el);
  return el;
}

/**
		<h2 class="title">实现一个Topo图</h2>
		<div id="board3" class="board-container"></div>
		<div class="btns"></div>
		<div class="img-view"></div>
 */
function createBoardBox(id, title) {
  let frag = getFragment();
  let box = addEl(frag, 'div', {className: 'box'});

  let h2 = addEl(box, 'h2', {innerText: title});

  let content = addEl(box, 'div', {className: 'box-content clearfix'});

  let container = addEl(content, 'div', {id: id, className: 'board-container fl'});

  let imgViewBox = addEl(content, 'div', {className: 'img-view fl'});

  let btnBox = addEl(box, 'div', {className: 'btns'});

  document.body.appendChild(frag);

  return {
    container, btnBox, imgViewBox
  };
}

let addAreaBox = (box, title) => {
  let area = addEl(box, 'div', {
    className: 'area-box'
  });
  let h3 = addEl(area, 'h3', {
    innerText: title
  });
  let areaContent = addEl(area, 'div', {
    className: 'area-content'
  });
  return areaContent;
}

let addBtn = (btnBox, title, onclick) => {
  addEl(btnBox, 'button', {
    innerText: title, 
    onclick: function(e) {
      onclick.call(this, e);
    }
  });
}
// 添加 range input
let addRangeInput = (box, title, max, value = 10, onchange) => {
  let label = addEl(box, 'label', {
    className: 'input-label',
    innerText: title
  });
  let input = addEl(label, 'input', {
    type: 'range',
    max: max,
    min: 1,
    value: value,
    onchange(e) {
      onchange.call(this, e);
      let value = e.target.value;
      span.innerText = value;
    }
  });
  let span = addEl(label, 'span', {
    innerText: value
  });
}

module.exports = {
  download, getFragment, createElement, addEl, createBoardBox, addAreaBox, addBtn, addRangeInput
};