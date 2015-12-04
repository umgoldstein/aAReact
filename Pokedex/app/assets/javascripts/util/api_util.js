var ApiUtil = window.ApiUtil = {

  fetchPokemon: function(id) {
    $.ajax({
      url: '/api/pokemon/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveSinglePokemon(data);
      }
    });
  },

  fetch: function() {
    $.ajax({
      url: '/api/pokemon',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  }

};
