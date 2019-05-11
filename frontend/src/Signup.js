import React from 'react';
import {
  Text, Box, Form, FormField, Button,
} from 'grommet';
import { connect } from 'react-redux';
import { handleSignup } from './modules/account';

class Signup extends React.Component {
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
    this.props.dispatch(handleSignup(this.state)).then(() => this.props.history.push('/games'));
  };

  render() {
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <Box margin="medium" width="medium" elevation="medium" pad="medium" round="small">
          <Text textAlign="center" color="white" margin={{ left: 'small' }}>
            NEW USERS
          </Text>
          <Form onSubmit={this.handleSubmit} color="blue">
            <FormField
              label="email"
              name="email"
              required
              value={email}
              onChange={this.handleChange}
            />
            <FormField
              type="password"
              label="password"
              name="password"
              required
              value={password}
              onChange={this.handleChange}
            />
            <Button type="submit" primary label="Submit" />
          </Form>
        </Box>
      </React.Fragment>
    );
  }
}

export default connect()(Signup);
