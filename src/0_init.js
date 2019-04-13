console.log("Hello world!");
function あ() {}

あ.parseBOB = function(string) {
  return JSON.parse(string);
};

あ.shmadClass = function(el, className) {
  return el.classList.add(className);
};

あ.shmAttr = function(elem) {
  return elem.getAttribute("src");
};

あ.shmIndexOf = function(arr) {
  return arr.indexOf(item);
};
