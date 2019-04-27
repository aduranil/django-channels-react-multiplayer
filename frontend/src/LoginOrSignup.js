import React from "react";
import { Form, FormField, Button } from "grommet";

class LoginOrSignup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <FormField label="email" name="email" required />
          <FormField label="password" name="password" required />
          <Button type="submit" primary label="Submit" />
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginOrSignup;
