import React from 'react';
import {
  Form, FormField, Button, Box, Text,
} from 'grommet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogin } from './modules/account';

class LoginOrSignup extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
  };

  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'email') {
      this.setState({ username: value });
    }
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleSubmit = () => {
    this.props.dispatch(handleLogin(this.state)).then(() => this.props.history.push('/games'));
  };

  render() {
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <Box
          gap="medium"
          width="medium"
          elevation="medium"
          pad="medium"
          round="small"
          margin="15px"
        >
          <Text textAlign="center" color="white" margin={{ left: 'small' }}>
            NEW USERS
          </Text>
          <Text margin={{ left: 'small' }}>
            Click
            {' '}
            <Link to="/signup">here</Link>
            {' '}
to create your user!
          </Text>
        </Box>
        <Box width="medium" elevation="medium" pad="medium" round="small">
          <Text textAlign="center" color="white" margin={{ left: 'small' }}>
            RETURNING USERS
          </Text>
          <Form onSubmit={this.handleSubmit} color="blue">
            <FormField
              onChange={this.handleChange}
              value={email}
              label="email"
              name="email"
              required
            />
            <FormField
              onChange={this.handleChange}
              value={password}
              name="password"
              type="password"
              label="password"
              required
            />
            <Button type="submit" primary label="Submit" />
          </Form>
        </Box>
      </React.Fragment>
    );
  }
}

export default connect()(LoginOrSignup);
