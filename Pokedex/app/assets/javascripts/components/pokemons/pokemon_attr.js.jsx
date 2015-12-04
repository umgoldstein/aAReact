window.PokemonAttr = React.createClass({

  mixins: [ReactRouter.History],

  showDetail: function(){
    this.history.pushState(null, "/pokemon/" + this.props.id);
  },

render: function() {
  return (
        <li className="pokemon-attribute" id={this.props.id} onClick={this.showDetail}>
          Name: {this.props.pokemon.name + " |"}   Type:
          {" " + this.props.pokemon.poke_type}
        </li>
  );
}

});
