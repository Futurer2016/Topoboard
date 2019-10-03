
let random = (begin, end) => {
  return Math.random() * (end - begin) + begin;
};
let randomColor = () => {
  return 'rgba(' + random(0, 256) + ', ' + random(0, 256) + ', ' + random(0, 256) + ', ' + random(0, 1) + ')';
}

export {
  random, randomColor
};