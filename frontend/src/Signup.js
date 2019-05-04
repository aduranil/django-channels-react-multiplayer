import React from 'react';
import {
  Text, Box, Form, FormField, Button,
} from 'grommet';
import { connect } from 'react-redux';
import { handleSignup } from './modules/account';

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleSubmit = () => {
    this.props.dispatch(handleSignup(this.state));
  };

  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <Box width="medium" elevation="medium" pad="medium" round="small">
          <Text textAlign="center" color="white" margin={{ left: 'small' }}>
            NEW USERS
          </Text>
          <Form onSubmit={this.handleSubmit} color="blue">
            <FormField
              label="email"
              name="username"
              required
              value={username}
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
