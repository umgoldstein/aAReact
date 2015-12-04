(function () {
  var _keys = [];
  var CHANGE_EVENT = "change";
  var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype);

  KeyStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case KeyConstants.KEY_PRESSED:
        if (_keys.indexOf(payload.noteName) === -1){
          _keys.push(payload.noteName);
          KeyStore.changed();}
        break;
      case KeyConstants.KEY_UP:
        var keyIdx = _keys.indexOf(payload.noteName);
        if (keyIdx !== -1) {
          _keys.splice(keyIdx, 1);
          KeyStore.changed();
        }
        break;
    }
  });

  // KeyStore.fetch = function () {
  //   $.ajax({
  //     url: '/api/keys',
  //     type: 'Get',
  //     dataType: 'json',
  //     success: function (data) {
  //       _keys = data;
  //       KeyStore.changed();
  //     }
  //   });
  // };

  // KeyStore.create = function (key) {
  //   $.ajax({
  //     url: '/api/keys',
  //     type: 'POST',
  //     dataType: 'json',
  //     data: {key: key},
  //     success: function (data) {
  //       _keys.push(data);
  //       KeyStore.changed();
  //     }
  //   });
  // };

  KeyStore.all = function () {
    return _keys.slice();
  };

  KeyStore.find = function (noteName) {
    if (_keys.indexOf(noteName) !== -1){
      return true;
    }
    return false;
  };


})();
