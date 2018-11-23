var React = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);