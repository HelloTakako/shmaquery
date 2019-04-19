console.log("Hello world!");
function あ() {}

あ.parseBOB = function(string) {
  return JSON.parse(string);
};

あ.shmadClass = function(el, className) {
  return el.classList.add(className);
};

あ.shmAttr = function(el, attr) {
  return el.getAttribute(attr);
};

あ.shmIndexOf = function(arr, item) {
  return arr.indexOf(item);
};
