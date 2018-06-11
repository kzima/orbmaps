import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import Image from "../register-bg.png";
import RegisterForm from "./RegisterForm";

const styles = theme => ({
  root: {
    backgroundImage: `url(${Image})`
  },
  button: {
    marginBottom: theme.spacing.unit * 4
  }
});

function RegisterPage(props) {
  return (
    <div className={props.classes.root}>
      <RegisterForm />
      <Button className={props.classes.button} href="https://www.orbmaps.com">
        Go Back
      </Button>
    </div>
  );
}

export default withStyles(styles)(RegisterPage);
