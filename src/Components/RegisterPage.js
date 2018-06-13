import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { StripeProvider } from "react-stripe-elements";
import { Elements } from "react-stripe-elements";

import Image from "../bg.png";
import RegisterForm from "./RegisterForm";

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit * 4
  }
});

function RegisterPage(props) {
  return (
    <div>
      <StripeProvider apiKey="pk_test_f6CVQllFUxotTAiPmmtB2jVy">
        <Elements>
          <RegisterForm />
        </Elements>
      </StripeProvider>
      <Button
        variant="contained"
        className={props.classes.button}
        href="https://www.orbmaps.com"
      >
        Go back to homepage
      </Button>
    </div>
  );
}

export default withStyles(styles)(RegisterPage);
