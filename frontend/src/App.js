import React from 'react';
import { Grommet, Box } from 'grommet';
import { Switch, Route } from 'react-router-dom';
import LoginOrSignup from './LoginOrSignup';
import Entrance from './Entrance';
import Signup from './Signup';
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
          border={{ color: 'brand', style: 'double', size: 'large' }}
          justify="center"
          height="100%"
          align="center"
          width="60%"
          margin={{ horizontal: 'auto' }}
          elevation="medium"
          background="linear-gradient(102.77deg, #a387db -9.18%, #18BAB9 209.09%)"
        >
          <Switch>
            <Route exact path="/" component={Entrance} />
            <Route exact path="/loginorsignup" component={LoginOrSignup} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Box>
      </Grommet>
    );
  }
}

export default App;
