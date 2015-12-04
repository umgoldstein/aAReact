window.PokemonDetail = React.createClass({

  getStateFromStore: function(){
    var pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    return pokemon;
  },

  getInitialState: function() {
    return {pokemon: this.getStateFromStore()};
  },

  componentDidMount: function () {
    ApiUtil.fetchPokemon(parseInt(this.props.params.pokemonId));
    PokemonStore.addDetailChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {
    PokemonStore.removeDetailChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({pokemon: this.getStateFromStore()});
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchPokemon(parseInt(newProps.params.pokemonId));
  },

  render: function () {
    var details;
    var toyIndex;
    if (this.state.pokemon){
      details = <div className="detail"><img src={this.state.pokemon.image_url}/></div>;
        if (this.state.pokemon.toys) {
          toyIndex = <ToysIndex toys={this.state.pokemon.toys}/>;
        }
    }

    return (
      <div>
        {details}
        {toyIndex}
      </div>
    );
  }


  });
