window.ApiActions = {
  receiveAllBenches: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveNewBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH_RECEIVED,
      newBench: bench
    });
  }
};
