import { addBtn } from './dom';

// 动画录制
let gifRecord = (box, ctx, quality) => {
  let gifAni = new Topoboard.Animation();
  let addFrame = false;
  gifAni.onenterframe = function() {
      addFrame && gif && gif.addFrame(ctx, {copy: true, delay: 1000 / 60});
  };
  gifAni.start();

  let gif;
  addBtn(box, '开始录制', e => {
    addFrame = ! addFrame;
    // 开始录制
    if(addFrame) {
      e.target.innerText = '结束录制';
      gif = new GIF({
        worker: 1,
        quality: quality || 10,
        width: 512,
        height: 480
      });
      gif.on('finished', function(blob) {
        console.log('record finished');
        let data = URL.createObjectURL(blob);
        // 预览
        img.src = data;
        imgViewBox.appendChild(img);
        // 导出
        // download(data, 'board1');
      });
    }
    // 结束录制
    else {
      e.target.innerText = '开始录制';
      gif.render();
    }
  });
}

export default gifRecord;