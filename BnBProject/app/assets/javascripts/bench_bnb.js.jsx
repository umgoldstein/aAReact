(function () {

  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  $(document).ready(function () {
    React.render(
      <Router>
        <Route path="/" component={App}>
          <Route path="benches/new" component={BenchForm}/>
          <IndexRoute component={Search} />
        </Route>
      </Router>, document.getElementById('bench'));
  });
})();


// can use routers to navigate to map by /#/map
// AppInedx will always be rendered through IndexRoute
// have to render this.props.children in Search
  // var Router = ReactRouter.Router;
  // var Route = ReactRouter.Route;
  // var IndexRoute = ReactRouter.IndexRoute;
  //
  // $(document).ready(function () {
  //   React.render(
  //   <Router>
  //     <Route path="/" component={Search}>
  //       <IndexRoute component={AppIndex}/>
  //       <Route path="map" component={Map}/>
  //     </Route>
  //   </Router>, document.getElementById('bench'));
  // });
