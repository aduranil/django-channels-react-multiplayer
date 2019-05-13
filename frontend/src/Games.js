import React from 'react';
import {
  Button, TextInput, Grid, Box, Text, Grommet,
} from 'grommet';
import { Gamepad } from 'grommet-icons';
import { connect } from 'react-redux';
import { createGame, logoutUser } from './modules/account';
import withAuth from './modules/authWrapper';

const theme = {
  button: {
    padding: {
      horizontal: '4px',
    },
  },
};

class Games extends React.Component {
  state = {
    roomName: '',
    showTextInput: '',
  };

  onClick = () => {
    this.props.dispatch(createGame(this.state.roomName));
  };

  onLogout = () => {
    this.props.dispatch(logoutUser());
    this.props.history.push('/loginorsignup');
  };

  render() {
    const { roomName } = this.state;
    return (
      <React.Fragment>
        <Grid alignSelf="stretch" columns={['large', 'small']}>
          <Text margin={{ left: '20px' }} alignSelf="start">
            {' '}
            SELFIES 2020
            {' '}
          </Text>
          <Button onClick={this.onLogout} alignSelf="end" label="logout" />
        </Grid>
        <Box
          round="xsmall"
          height="medium"
          margin="medium"
          width="600px"
          pad="medium"
          elevation="medium"
          background="accent-2"
        >
          <Grid columns={{ count: 2 }}>
            <Grommet theme={theme}>
              <Button margin={{ right: '5px' }} label="join" />
              {' '}
              <Text> Nose Dive </Text>
            </Grommet>
          </Grid>
        </Box>
        <Grid columns={{ count: 2, size: 'auto' }} gap="small">
          <TextInput
            placeholder="room name"
            value={roomName}
            onChange={event => this.setState({ roomName: event.target.value })}
          />
          <Button onClick={this.onClick} icon={<Gamepad />} label="Create new game" />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withAuth(connect()(Games));
