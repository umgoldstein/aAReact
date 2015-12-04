window.ToyDetail = React.createClass({

  getStateFromStore: function(){
   var pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
   if (typeof pokemon === 'undefined') {
     return;
   }
   for (var i = 0; i < pokemon.toys.length; i++){
     if (pokemon.toys[i].id === parseInt(this.props.params.toyId)){
       return pokemon.toys[i];
     }
   }
  },

  getInitialState: function() {
    return {toy: this.getStateFromStore()};
  },

  componentDidMount: function () {
    PokemonStore.addDetailChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {
    PokemonStore.removeDetailChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({toy: this.getStateFromStore()});
  },

  componentWillReceiveProps: function (newProps) {

  },

  render: function () {
    var toy;
    if (typeof this.state.toy !== 'undefined'){
      toy = (
        <ul>
          <li>{this.state.toy.name}</li>
          <li>{this.state.toy.price}</li>
          <li>{this.state.toy.happiness}</li>
        <img src={this.state.toy.image_url}/>
        </ul>
      );
    }
  return (<div className='detail'>{toy}</div>);
  }


});
