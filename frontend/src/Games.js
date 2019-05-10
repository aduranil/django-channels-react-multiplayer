import React from 'react';
import { Button } from 'grommet';
import { Gamepad } from 'grommet-icons';
import { connect } from 'react-redux';
import { createGame } from './modules/account';
import withAuth from './modules/authWrapper';

class Games extends React.Component {
  componentDidMount() {
    this.props.dispatch(createGame());
  }

  render() {
    return <Button icon={<Gamepad />} label="Create new game" />;
  }
}

export default withAuth(connect()(Games));
