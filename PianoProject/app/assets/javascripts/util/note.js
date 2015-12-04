(function (root) {
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();

  // var Note = window.Note = window.Note || {};
  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  Note = window.Note = function (freq) {
    this.freq = freq;
    this.oscillatorNode = createOscillator(freq);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  };

  Note.prototype.start = function () {
    this.gainNode.gain.value = 0.3;
  };

  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };



})(this);


// var CatProperties = {
//   color: 'brown',
//   age: 2,
//   sayHi: function() {
//     return "hi";
//   }
// };
//
// var Util = {};
//
// Util.distance = function(coord1, coord2) {
//
// }
//
// // cannot do this
// var sennacy = new CatProperties();
//
// CatProperties.color = "Brown";
// CatProperties.age = 2;
//
// var Cat = function() {
//   this.color = CatProperties.color;
//   this.age = CatProperties.age;
// };
