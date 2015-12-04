var Key = React.createClass({

  getInitialState: function () {
    return { pressed: false };
  },

  componentDidMount: function () {
    var freq = Tones[this.props.noteName];
    this.note = new Note(freq);
    KeyStore.addChangeHandler(this.handleChange);
  },

  componentWillUnmount: function () {
    KeyStore.removeListener(this.handleChange);
  },

  handleChange: function () {
    if (KeyStore.find(this.props.noteName)) {
      console.log("pressed");
      console.log(KeyStore.all());
      this.setState({ pressed : true });
      this.note.start();
    } else {
      this.setState({ pressed : false });
      this.note.stop();
    }
  },

  render: function () {
    var klass = (this.state.pressed ? "pressed" : "unpressed");
    return (
      <div className={klass}>
      </div>
    );
  }
});

var Organ = React.createClass({
  render: function () {
  var notes = ["C","D","E","F","G","A","B"];

    return <div className="keys">
    {
      notes.map(function(note, index){
        return <Key key={index} noteName={note} />;
      })
    }
    </div>;
  }

});
