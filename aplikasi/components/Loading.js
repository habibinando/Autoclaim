var React = require('react');
var PropTypes = require('prop-types');

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    var stopper = this.props.text + '...';
    this.interval = window.setInterval(function () {
      if (this.state.text === stopper) {
        this.setState(function () {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function (prevState) {
          return {
            text: prevState.text + '.'
          }
        });
      }
    }.bind(this), this.props.speed)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      this.props.loading ? <div className='block-ui-container'>
        <div className='block-ui-overlay'></div>
        <div className='block-ui-message-container'>
          <div className='block-ui-message'>{this.state.text}</div>
        </div>
      </div>
        : null
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  text: 'Processing...',
  speed: 300,
  loading: true,
};

module.exports = Loading;
