import React, { useState } from 'react';
import { Text, Box } from 'grommet';
import { connect } from 'react-redux';
import { connectToSocket } from './modules/websocket';

class Game extends React.Component {
  componentDidMount() {
    if (this.props.id) {
      this.props.dispatch(connectToSocket(this.props.id));
    }
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
const s2p = (state, ownProps) => ({
  id: ownProps.match && ownProps.match.params.id,
});
export default connect(s2p)(Game);
