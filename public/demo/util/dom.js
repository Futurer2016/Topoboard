function getFragment() {
  return document.createDocumentFragment();
}
function createElement(nodeName) {
  return document.createElement(nodeName);
}
/**
		<h2 class="title">实现一个Topo图</h2>
		<div id="board3" class="board-container"></div>
		<div class="btns"></div>
		<div class="img-view"></div>
 */
function createBoardBox(id, title) {
  let frag = getFragment();
  let box = createElement('div');
  box.className = 'fl';
  frag.appendChild(box);

  let h2 = createElement('h2');
  h2.innerText = title;
  box.appendChild(h2);

  let container = createElement('div');
  container.id = id;
  container.className = 'board-container';
  box.appendChild(container);

  let btnBox = createElement('div');
  btnBox.className = 'btns';
  box.appendChild(btnBox);

  let imgViewBox = createElement('div');
  imgViewBox.className = 'img-view';
  box.appendChild(imgViewBox);

  document.body.appendChild(frag);

  return {
    container, btnBox, imgViewBox
  };
}

module.exports = {
  getFragment, createElement, createBoardBox
};