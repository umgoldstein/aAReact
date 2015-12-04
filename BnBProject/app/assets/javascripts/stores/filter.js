(function (root) {

  var _filters = {};
  var CHANGE_EVENT = 'change';
  var FilterStore = window.FilterStore = $.extend({}, EventEmitter.prototype);


  FilterStore.addChangeListener = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  FilterStore.removeChangeListener = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  FilterStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  FilterStore.resetFilters = function(filters) {
    _filters = filters;
  };

  FilterStore.dispatcherID = AppDispatcher.register(function(payload){
    switch(payload.actionType) {
      case FilterConstants.FILTERS_RECEIVED:
        FilterStore.resetFilters(payload.filters);
        FilterStore.changed();
      break;

    }
  });

  FilterStore.currentFilters = function () {
    return JSON.parse(JSON.stringify(_filters)); // Need copy of an object
  };

})(this);
