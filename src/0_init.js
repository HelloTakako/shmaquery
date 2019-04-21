console.log("Hello world!");
function あ() {}

あ.parseBOB = function(string) {
  return JSON.parse(string);
<<<<<<< HEAD
}

あ.shtrim = function(string) {
  return string.trim();
}

あ.shtype = function(obj) {
  return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}
// TODO test for it and better definition
あ.sheach = function(array, callback) {
  return array.forEach(callback);
}

=======
};

あ.shmadClass = function(el, className) {
  return el.classList.add(className);
};

あ.shmAttr = function(el, attr) {
  return el.getAttribute(attr);
};

あ.shmIndexOf = function(arr, index) {
  return arr.indexOf(index);
};
>>>>>>> FETCH_HEAD
