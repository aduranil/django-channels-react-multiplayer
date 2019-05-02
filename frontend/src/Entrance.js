import React from 'react';
import { Text } from 'grommet';

const Entrance = () => (
  <React.Fragment>
    <Text color="accent-1" size="77px">
      SELFIES 2020
    </Text>
    <a href="/loginorsignup">
      <img alt="Door" src={require('./images/Door.png')} />
    </a>
  </React.Fragment>
);

export default Entrance;
