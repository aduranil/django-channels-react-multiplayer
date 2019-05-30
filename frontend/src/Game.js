import React, { useState } from 'react';
import { Text, Box } from 'grommet';
import { connect } from 'react-redux';
import WebSocketConnection from './WebSocketConnection';

class Game extends React.Component {
  render() {
    if (this.props.id) {
      return (
        <React.Fragment>
          <WebSocketConnection
            host={`ws://127.0.0.1:8000/ws/game/${this.props.id}?token=${localStorage.getItem(
              'token',
            )}`}
            autoconnect
          >
            <Box
              round="xsmall"
              height="medium"
              margin="medium"
              width="600px"
              pad="medium"
              elevation="medium"
              background="accent-2"
            />
          </WebSocketConnection>
        </React.Fragment>
      );
    }
  }
}
const s2p = (state, ownProps) => ({
  id: ownProps.match && ownProps.match.params.id,
});
export default connect(s2p)(Game);
