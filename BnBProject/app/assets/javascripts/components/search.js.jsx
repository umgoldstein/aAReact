window.Search = React.createClass ({

  getIntialState: function () {
    return {filterParams: this.props.location.query};
  },

  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "benches/new", coords);
  },

  componentDidMount: function () {
    FilterStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({filterParams: FilterStore.currentFilters()});
    ApiUtil.fetchBenches(FilterStore.currentFilters());
  },

  render: function () {
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler} />
        <BenchIndex />
        <FilterSeating />
      </div>
    );
  }
});
