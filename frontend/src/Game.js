import React, { useState } from 'react';
import { Text, Box } from 'grommet';
import { connect } from 'react-redux';
import WebSocketConnection from './WebSocketConnection';
import { join } from './modules/websocket';
import { wsConnect } from './modules/WSClientActions';

class Game extends React.Component {
  componentDidMount() {
    if (this.props.id) {
      this.connectAndJoin();
    }
  }

  connectAndJoin = () => {
    const { id, dispatch, username } = this.props;
    const host = `ws://127.0.0.1:8000/ws/game/${id}?token=${localStorage.getItem('token')}`;
    dispatch(wsConnect(host));
    setTimeout(() => {
      dispatch(join(username, id));
    }, 3000);
  };

  render() {
    if (this.props.id) {
      return (
        <React.Fragment>
          <Box
            round="xsmall"
            height="medium"
            margin="medium"
            width="600px"
            pad="medium"
            elevation="medium"
            background="accent-2"
          />
        </React.Fragment>
      );
    }
  }
}
const s2p = (state, ownProps) => ({
  id: ownProps.match && ownProps.match.params.id,
  username: state.auth.username,
  socket: state.socket.host,
});
export default connect(s2p)(Game);
