var phraseArray = [
  "別猶豫  Do not Hesitate",
  "保持彈性  Remain Flexible",
  "木已成舟  It may already be a done deal",
  "你得配合環境行事  You will need to accommodate",
  "救兵會出現  It will sustain you",
  "其他人不見得會贊同  Others may not approve",
  "放下吧  Let it go",
  "你不是真心在意  You do not really care",
  "走一步，算一步  You will have to make it up as you go",
  "一定會有正面的結果  The outcome will be positive",
  "保持彈性  Remain Flexible",
  "不要指望  Do not bet on it",
  "現在就很好了  Be content to leave well enough alone",
  "會變好的  It is gonna be sweet",
  "或許需要換一個方向  A new style could be just what you need",
  "你不會失望的  You will not be disappointed",
  "浪漫的搞定它吧  Romance your way into it",
  "及早開始  Do it early",
  "要知道何時該走  Know when it is time to go",
  "先把自己打理好  Start by building a nest",
];

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function completeSentence(arr, loc) {
  index = randomIndex(arr);
  document.getElementById(loc).innerHTML = arr[index];
}
