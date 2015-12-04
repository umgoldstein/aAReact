window.FilterSeating = React.createClass({


  _onChangeMin: function (e) {
    var $form = $(e.currentTarget);
    var minSeats = parseInt($form.serializeJSON().minSeats);
    // FilterActions.receiveAllFilters(minSeats);
  },

  _onChangeMax: function (e) {
    var $form = $(e.currentTarget);
    var maxSeats = parseInt($form.serializeJSON().maxSeats);
    // FilterActions.receiveAllFilters(maxSeats);
  },

  render: function () {
      return (
          <div className="filterSeating">
            <label>minSeats:
            <input
              onChange={this._onChangeMin}
              type='text'
              value=""
              name="minSeats"
            />
            </label>
            <label>maxSeats:
            <input
              onChange={this._onChangeMax}
              type='text'
              value=""
              name="maxSeats"
            />
            </label>
          </div>
      );
  }
});
