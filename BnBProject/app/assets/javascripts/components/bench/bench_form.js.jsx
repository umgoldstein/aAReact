window.BenchForm = React.createClass({

  getIntialState: function () {
    return {description: ""};
  },

  createBench: function (e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    // var lat = $form.find("#lat").val();
    // var lng = $form.find("#lng").val();
    // var description = $form.find("#description").val();
    // var bench = {
    //   lat: parseFloat(lat),
    //   lng: parseFloat(lng),
    //   description: description
    // };
    var bench = $form.serializeJSON();
    bench.lat = parseFloat(bench.lat);
    bench.lng = parseFloat(bench.lat);
    ApiUtil.createBench(bench);
  },

  render: function () {


    return (
    <form className='new-bench' onSubmit={this.createBench}>
      <label>Latitude:
      <input
        type='text'
        value={this.props.location.query.lat}
        name="lat"
      />
      </label>

      <label>Longitude:
      <input
        type='text'
        value={this.props.location.query.lng}
        name="lng"
      />
      </label>

      <label>Description:
        <input onChange={this.updateDescription} type='text' name="description"/>
      </label>

      <button>Create Bench</button>
    </form>);
  }

});
