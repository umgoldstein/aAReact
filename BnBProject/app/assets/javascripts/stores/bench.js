(function (root) {

  var _benches = [];
  var CHANGE_EVENT = "change";
  var BenchStore = window.BenchStore = $.extend({}, EventEmitter.prototype);

  BenchStore.addChangeListener = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  BenchStore.removeChangeListener = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  BenchStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  var resetBenches = BenchStore.resetBenches = function(benches) {
    _benches = benches;
  };

  var addNewBench = BenchStore.addNewBench = function(bench) {
    _benches.push(bench);
  };

  BenchStore.dispatcherID = AppDispatcher.register(function(payload){
    switch(payload.actionType) {
      case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.changed();
      break;
      case BenchConstants.NEW_BENCH_RECEIVED:
      addNewBench(payload.newBench);
      BenchStore.changed();
      break;
    }
  });

  BenchStore.all = function () {
    return _benches.slice(0);
  };

})(this);
