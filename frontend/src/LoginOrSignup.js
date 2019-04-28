import React from "react";
import { Form, FormField, Button, Box, Text } from "grommet";

class LoginOrSignup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Box
          gap="medium"
          width="medium"
          elevation="medium"
          pad="medium"
          round="small"
          margin="15px"
        >
          <Text textAlign="center" color="white" margin={{ left: "small" }}>
            NEW USERS
          </Text>
          <Text margin={{ left: "small" }}>
            Click here to create your user!
          </Text>
        </Box>
        <Box width="medium" elevation="medium" pad="medium" round="small">
          <Text textAlign="center" color="white" margin={{ left: "small" }}>
            RETURNING USERS
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

export default LoginOrSignup;
