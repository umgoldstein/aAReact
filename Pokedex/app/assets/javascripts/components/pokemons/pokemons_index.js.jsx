window.PokemonsIndex = React.createClass({

  getInitialState: function(){
    return {pokemons: PokemonStore.all()};
  },

  componentDidMount: function() {
    ApiUtil.fetch();
    PokemonStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {
    PokemonStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ pokemons: PokemonStore.all() });
  },

  render: function () {
    return (
    <div>
      <ul className="pokemons">
      {
        this.state.pokemons.map(function (pokemon){
          return <PokemonAttr pokemon={pokemon} id={pokemon.id} key={pokemon.id} />;
          })
      }
      </ul>
    </div>);
  }


});
