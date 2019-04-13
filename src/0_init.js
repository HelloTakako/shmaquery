console.log("Hello world!");
function あ() {
}

あ.parseBOB = function(string) {
  return JSON.parse(string);
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

