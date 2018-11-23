var React = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');
var claim = require('../utils/claim');
var Loading = require('./Loading');
var backand = require('@backand/vanilla-sdk');



class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.getUserDetails = this.getUserDetails.bind(this);
  }
  componentDidMount() {
    setTimeout(function () { this.getUserDetails(); }.bind(this), 1000);
  }
  /**
   * @description 
   * @returns 
   * @memberof Auth
   */
  render() {
    return (
      <div className='Auth-container'>
        {this.state.user ? <p> Welcome - {this.state.user}</p> : ''}
        {this.state.user ? <button onClick={this.signout.bind(this)}>Logout</button> : <button onClick={this.signin.bind(this, 'facebook')}>Facebook signin</button> }
      </div>
    )
  }
  /**
   * @description 
   * @memberof Auth
   */
  signin(provider) {
    backand.socialSignin(provider)
      .then(function (res) {
        this.getUserDetails();
      }.bind(this));
  }
  /**
   * @description 
   * @memberof Auth
   */
  signout() {
    backand.signout()
      .then(function (res) {
        this.getUserDetails();
      }.bind(this));
  }
  /**
   * @description 
   * @memberof Auth
   */
  getUserDetails() {
    backand.user.getUserDetails()
      .then(function (res) {
        if (res.data && res.data.fullName) {
          this.setState(function () {
            return {
              user: res.data.fullName
            }
          });
        } else {
          this.setState(function () {
            return {
              user: null
            }
          });
        }
      }.bind(this));
  }
}

module.exports = Auth;