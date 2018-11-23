var React = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');
var Claim = require('../utils/claim');
var Loading = require('./Loading');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      claims: [],
      loading: false
    };
  }
  componentDidMount() {
    setTimeout(function () {
      this.getAllClaims();
    }.bind(this), 300)
  }

  getAllClaims() {
    this.setState(function () {
      return {
        loading: true,
      };
    });
    Claim.all()
      .then(function (result) {
        console.log('All Claims', result.data);
        this.setState(function () {
          return {
            claims: result.data,
            loading: false,
          }
        });

      }.bind(this))
      .catch(function (err) {
        this.setState(function () {
          return {
            loading: false,
            error: err.statusText || err
          };
        });
      }.bind(this));
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-block my-3" onClick={this.getAllClaims.bind(this)}>Refresh List</button>
        <Loading
          loading={this.state.loading}
        />
        {this.state.claims.map((claim, i) =>
          <div className='row-claim' key={i}>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-6 img-container img-org'>
                    <div className='img-wrapper'>
                      <img src={claim.imageUrl} />
                    </div>
                  </div>
                  <div className='col-md-6 img-container img-crop'>
                    <img src={claim.vehicleUrl} />
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col-md-12'>
                    Plate:  <h4 className='display-inline'>{claim.plate}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

module.exports = Home;