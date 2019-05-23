import React, { useState } from 'react';
import { Text, Box } from 'grommet';
import { connectToSocket } from './modules/websocket';

class Game extends React.Component {
  componentDidMount() {
    this.props.dispatch(connectToSocket());
  }

  render() {
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

export default Game;
