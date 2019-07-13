import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleLogin, removeError } from '../modules/account';
import Form from '../components/Form';

class LoginOrSignup extends React.Component {
  state = {
    email: '',
    password: '',
  };

  componentWillUnmount() {
    this.props.dispatch(removeError());
  }

  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleSubmit = async () => {
    const { dispatch, history } = this.props;
    const response = await dispatch(handleLogin(this.state));
    if (!response) return history.push('/games');
  };

  render() {
    const { username, email, password } = this.state;
    const { route } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '100vw',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            alignSelf: 'center',
            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.25), inset 0 1px 3px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            backgroundColor: '#ff70a6',
          }}
        >
          <h1 style={{ textAlign: 'center', marginTop: '15px' }}>
            {route === '/loginorsignup' ? 'Returning Users' : 'New Users'}
          </h1>
          <Form
            route={route}
            username={username}
            password={password}
            email={email}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {route === '/loginorsignup' && (
            <div>
              Click
              {' '}
              <Link to="/signup">here</Link>
              {' '}
to create your user!
            </div>
          )}
        </div>
      </div>
    );
  }
}

LoginOrSignup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
};

LoginOrSignup.defaultProps = {
  dispatch: PropTypes.func,
};

const s2p = (state, ownProps) => ({
  route: ownProps.match && ownProps.match.path,
});
export default connect(s2p)(LoginOrSignup);
