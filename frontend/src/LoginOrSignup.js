import React from "react";
import { Form, FormField, Button, Box } from "grommet";

class LoginOrSignup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Box elevation="medium" pad="medium" round="large">
          <Form>
            <FormField label="email" name="email" required />
            <FormField label="password" name="password" required />
            <Button type="submit" primary label="Submit" />
          </Form>
        </Box>
      </React.Fragment>
    );
  }
}

export default LoginOrSignup;
