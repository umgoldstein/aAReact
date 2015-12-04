window.FilterActions = {
  receiveAllFilters: function (filters) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTERS_RECEIVED,
      filters: filters
    });
  },
};
