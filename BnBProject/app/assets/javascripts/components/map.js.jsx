window.Map = React.createClass({
  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.732157, lng:-73.995171},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle',function () {
      var bounds = this.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      var coordinateObject = {
        "northEast": {"lat": northEast.lat(), "lng": northEast.lng()},
        "southWest": {"lat": southWest.lat(), "lng": southWest.lng()},
      };
      
      FilterActions.receiveAllFilters(coordinateObject);
    });

    this.map.addListener('click',this._handleClick);

    BenchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.createMarkers();
    this.removeMarkers();
  },

  createMarkers: function () {
    var benches = BenchStore.all();
    var marker;
    var positions = {};
    var pos_s;

    this.markers = this.markers ? this.markers : [];

    this.markers.forEach( function (marker) {
      pos_s = (marker.position.lat().toString() + marker.position.lng().toString());
      positions[pos_s] = [marker.position.lat(), marker.position.lng()];
    });

    for ( var i = 0 ; i < benches.length ; i++ ) {
      marker = new google.maps.Marker({
        position: {lat: benches[i].lat, lng: benches[i].lng},
        title: (benches[i].description)
      });
      marker.setMap(this.map);

      pos_s = (marker.position.lat().toString() + marker.position.lng().toString());
      if (Object.keys(positions).indexOf(pos_s) === -1){
        this.markers.push(marker);
      }
    }
  },

  removeMarkers: function () {
    var benches = BenchStore.all();
    var markers = this.markers;
    var hasIt;
    var remove = [];

    markers.forEach(function (marker, index) {
      hasIt = false;
      benches.forEach( function (bench) {
        if (marker.title === bench.description) {
          hasIt = true;
        }
      });

      if (!hasIt){
        remove.push(index);
        marker.setMap(null);
        marker = null;
      }
    }.bind(this));

    for (i = (remove.length - 1); i >= 0; i-- ){
        this.markers.splice(remove[i], 1) ;
    }
  },

  _handleClick: function (e) {
    var coord = {};
    coord.lat = e.latLng.lat();
    coord.lng = e.latLng.lng();
    this.props.clickMapHandler(coord);
  },

  render: function () {

    return (
    <div className="map" ref="map">

    </div>
    );
  }
});
