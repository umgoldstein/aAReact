var MineSweeper = React.createClass({
  getInitialState: function() {
    return {board: new Minesweeper.Board(9,10)};
  },

  updateGame: function() {

  },

  render: function () {
    return <Board board={this.state.board} update={this.updateGame}/>;
  }
});

var Board = React.createClass({
  getIntitialState: function() {
    return {board: 0};
  },

  render: function () {
    var tiles = [];
    this.props.board.grid.forEach(function (row, index1) {
      row.forEach(function (tile, index2) {
        tiles.push(<Tile className="tile" key={[index1, index2]} tile={tile} update={this.props.update}/>);
      }.bind(this));
    }.bind(this));
    return <div className="tiles">

        {tiles}

    </div>;
  }
});

var Tile = React.createClass({
  getIntitialState: function() {
    return {tile: 0};
  },

  handleClick: function (e) {
    debugger
    this.props.update(this.props.tile, true);
  },

  render: function () {
    var tileText = " ";
    if (this.props.tile.explored === true){

      tileText = "explored";
      var bombs = 0;
      if (this.props.tile.bombed === true){
        tileText = "💣";
      } else {
        this.props.tile.neighbors().forEach(function(tile){
          if (tile.bombed === true){
            bombs += 1;
          }
        });
        if (bombs > 0) {tileText = bombs;}
      }
    } else if ( this.props.tile.flagged === true){
      tileText = "⚑";
    }

    return <div className="tile" onClick={this.handleClick}>
      {tileText}
    </div>;
  }
});
