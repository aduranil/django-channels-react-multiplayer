import React from 'react';
import { Text } from 'grommet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rectangle from '../images/Rectangle';
import './App.scss';

class Entrance extends React.Component {
  componentDidMount() {
    const { loggedIn, history } = this.props;
    if (loggedIn) {
      history.push('/games');
    }
  }

  render() {
    return (
      <div style={{ minWidth: '100vw', minHeight: '100' }}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <Rectangle />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '100vw',
            minHeight: '100vh',
          }}
        >
          <div>
            <Text color="accent-1" size="77px">
              SELFIES 2020
            </Text>
          </div>
          <div className="landing-page-wrapper" style={{ maxWidth: '100%' }} />
        </div>
      </div>
    );
  }
}

Entrance.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  loggedIn: PropTypes.bool,
};

Entrance.defaultProps = {
  loggedIn: PropTypes.null,
};
const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(Entrance);
