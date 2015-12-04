(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  $(document).ready(function () {
    React.render(
      <Router>
        <Route path="/" component={AppIndex}>
          <Route path="pokemon/:pokemonId" component={PokemonDetail}/>
          <Route path="pokemon/:pokemonId/toys/:toyId" components={{pokemonDetail: PokemonDetail, toyDetail: ToyDetail}}/>
        </Route>
      </Router> ,document.getElementById('pokedex'));
  });
})();
