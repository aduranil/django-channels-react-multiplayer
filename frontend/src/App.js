import React from 'react';
import { Grommet, Box } from 'grommet';
import { Switch, Route } from 'react-router-dom';
import LoginOrSignup from './LoginOrSignup';
import Entrance from './Entrance';
import Signup from './Signup';
import Games from './Games';
import WebSocketInstance from './websocket';

const theme = {
  global: {
    font: {
      family: 'Luckiest Guy',
    },
  },
};

class App extends React.Component {
  componentDidMount() {
    WebSocketInstance.connect();
  }

  render() {
    return (
      <Grommet theme={theme}>
        <Box
          justify="center"
          height="100%"
          align="center"
          padding={{ top: '20px' }}
          margin={{ horizontal: 'auto' }}
          round="xsmall"
        >
          <Switch>
            <Route exact path="/" component={Entrance} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/loginorsignup" component={LoginOrSignup} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Box>
      </Grommet>
    );
  }
}

export default App;
