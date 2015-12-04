var ApiUtil = window.ApiUtil = {

  fetchBenches: function(coordinateObject) {
    $.ajax({
      url: '/api/benches',
      type: 'GET',
      dataType: 'json',
      data: {bounds: coordinateObject},
      success: function (data) {
        ApiActions.receiveAllBenches(data);
      }
    });
  },

  createBench: function(bench) {
    $.ajax({
      url: '/api/benches',
      type: 'POST',
      dataType: 'json',
      data: {bench: bench},
      success: function (data) {
        ApiActions.receiveNewBench(data);
      }
    });
  },

};
