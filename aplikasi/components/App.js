var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var backand = require('@backand/vanilla-sdk');
var Nav = require('./Nav');

/**
 * components
 */
var Home = require('./Home');
var Auth = require('./Auth');
var NewClaim = require('./NewClaim');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    backand.init && backand.init({
      appName: 'autoclaim20',
      setIsMobile: false,
      runSocket: true
    });
  }
  componentWillUnmount() {
    // Clean up listener
  }
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/auth' component={Auth} />
            <Route path='/new-claim' component={NewClaim} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;