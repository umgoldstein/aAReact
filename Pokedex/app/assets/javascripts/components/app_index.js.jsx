window.AppIndex = React.createClass({
  render: function () {
    return (
      <div><PokemonsIndex />{this.props.children}</div>
    );
  }
});
