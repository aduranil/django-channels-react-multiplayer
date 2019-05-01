import React from "react";
import ReactDOM from "react-dom";
import { Text, Box, Form, FormField, Button } from "grommet";

class Signup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Box width="medium" elevation="medium" pad="medium" round="small">
          <Text textAlign="center" color="white" margin={{ left: "small" }}>
            NEW USERS
          </Text>
          <Form color="blue">
            <FormField label="email" name="email" required />
            <FormField
              type="password"
              label="password"
              name="password"
              required
            />
            <Button type="submit" primary label="Submit" />
          </Form>
        </Box>
      </React.Fragment>
    );
  }
}

export default Signup;
