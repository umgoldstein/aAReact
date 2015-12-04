window.ToysIndex = React.createClass({

  mixins: [ReactRouter.History],

  componentDidMount: function () {
  },

  componentWillUnmount: function () {
  },

  _onChange: function () {
  },

  componentWillReceiveProps: function (newProps) {
  },

  handleClick: function (e) {
    var toy = e.currentTarget;
    var pokemonId = this.props.toys[0].pokemon_id;
    this.history.pushState(null, "/pokemon/" + pokemonId + "/toys/" + toy.id);
  },

  render: function () {
    var toys = this.props.toys;
    var toyComponents;
    if (typeof toys !== 'undefined'){
      toyComponents = ( toys.map(function (toy){
          return (
            <div className="toy" id={toy.id} onClick={this.handleClick}>
              <ul>
                <li>{toy.name}</li>
                <li>{toy.price}</li>
                <li>{toy.happiness}</li>
              <img src={toy.image_url}/>
              </ul>
            </div>
            );
          }.bind(this))
      );
    }

    return (
      <div>{toyComponents}</div>
    );
  }


  });
