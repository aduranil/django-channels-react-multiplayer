import React from 'react';
import {
  Button, TextInput, Grid, Box, Text, Grommet,
} from 'grommet';
import { Gamepad } from 'grommet-icons';
import { connect } from 'react-redux';
import { createGame } from './modules/account';
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

  render() {
    const { roomName } = this.state;
    return (
      <React.Fragment>
        <Box round="xsmall" margin="medium" width="medium" pad="medium" background="accent-2">
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
