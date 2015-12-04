var AutoCompleteInput = React.createClass({
  getInitialState: function() {
    return {searchString: ""};
  },

  handleInput: function (e) {
    this.setState({ searchString: e.target.value });
  },

  findName: function (e) {
    this.setState({ searchString: e.currentTarget.textContent});
  },

  render: function() {
      var namesArray = this.props.names,
        searchString = this.state.searchString.trim().toLowerCase();
      if(searchString.length > 0){
        namesArray = namesArray.filter(function(n){
          return n.toLowerCase().match( searchString );
        });
      }
      return <div>
      <h4>SearchInput</h4>
        <input
          onChange={this.handleInput}
          type="text"
          value={ searchString }>
        </input>
        <ul>
          {
            namesArray.map(function(n, idx){
              return <li key={idx} onClick={this.findName}>{n}</li>;
            }.bind(this))
          }
        </ul>
      </div>;
  }
});

var WeatherClock = React.createClass({
  getInitialState: function() {
    return {clock: new Date(),
            weather: {weather: [{description: ""}], main: {temp: 0} } };
  },

  componentDidMount: function () {

    this.clock = setInterval(this.tick ,1000);

    navigator.geolocation.getCurrentPosition(function (pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      var apiKey = "2c2d7b8909857e26279eba8369cc7e3e";
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon=' + longitude + '&APPID=' + apiKey;
      var request = new XMLHttpRequest();
        request.open('GET', url , true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            this.setState({weather: JSON.parse(resp)});
          } else {
            console.log("Reached server, but it returned an error");
          }
        }.bind(this);

        request.onerror = function() {
          console.log("There was a connection error of some sort");
        };

        request.send();
    }.bind(this));
  },

  componentWillUnmount: function () {
    clearInterval(this.clock);
  },

  tick: function () {
    this.setState({clock: new Date()});
  },

  render: function() {
    var weatherString = "";
    if (this.state.weather.weather[0].description !== "") {
      var temperature = Math.floor(this.state.weather.main.temp - 273.15);
      weatherString = <p>The {this.state.weather.weather[0].description} with a temperature of {temperature} celsius degrees</p>;
    }
    return <div>
      <br/>
      <h4>WeatherClock</h4>
      <p>{this.state.clock.toString()}</p>
      {weatherString}
    </div>;
  }
});

var Tabs = React.createClass({
  getInitialState: function(){
    return {tabs: 0};
  },

  clicked: function(index){
    this.setState({tabs: index});
  },

  render: function(){
    var dogsArray = this.props.dogs;
    var self = this;

    return <div>
      <br/>
      <h4>Tabs</h4>
      <ul>{ dogsArray.map(function(dog, index){
          return <li onClick={self.clicked.bind(self,index)}>{dog.name}</li>; // for styling could add className={self.state.tabs == index ? "tabs" : "" }
      }) }
      </ul>
      <article>Paragraph: {dogsArray[this.state.tabs]}</article>
    </div>;
  }
});
