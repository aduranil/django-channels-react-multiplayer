import React from "react";
import ReactDOM from "react-dom";
import Chat from "./Chat";
import WebSocketInstance from "./websocket";
import { Grommet, Box, Text, Grid } from "grommet";

const theme = {
  global: {
    font: {
      family: "Crafty Girls",
      size: "14px",
      height: "20px"
    }
  }
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
          pad="none"
          width="50%"
          margin={{ horizontal: "auto" }}
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
        >
          <Text color="accent-1" size="77px">
            SELFIES 2020
          </Text>
        </Box>
      </Grommet>
    );
  }
}

export default App;
