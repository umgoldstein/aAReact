var MAPPED_KEYS = {

  65: "C",
  83: "D",
  68: "E",
  70: "F",
  71: "G",
  72: "A",
  74: "B",

};


window.KeyActions = {

  keyPressed: function (event) {
    var noteName = MAPPED_KEYS[event.keyCode];
    if (typeof noteName !== "undefined") {
      AppDispatcher.dispatch ({
        actionType: KeyConstants.KEY_PRESSED,
        noteName: noteName
      });
    }
  },

  keyUp: function (event) {
    var noteName = MAPPED_KEYS[event.keyCode];

    if (typeof noteName !== "undefined") {
      AppDispatcher.dispatch ({
        actionType: KeyConstants.KEY_UP,
        noteName: noteName
    });
  }}
};

  // createKey: function (key) {
  //   AppDispatcher.dispatch ({
  //     eventType: KeyConstants.CREATE_KEY,
  //     key: key
  //   });
  // }
