import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { injectStripe } from "react-stripe-elements";
import { withStyles } from "@material-ui/core/styles";

import CardSection from "./CardSection";
import logo from "../logo.png";

const registerURL = process.env.REACT_APP_REGISTER_URL;

const styles = theme => ({
  registerButton: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
  wrapper: {
    maxWidth: 600,
    margin: "auto"
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    borderRadius: 10
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    maxWidth: "90%"
  },
  error: {
    color: "red"
  },
  logo: {
    width: 300,
    maxWidth: "90%",
    margin: theme.spacing.unit
  },
  progress: {
    marginTop: theme.spacing.unit * 2
  },
  inputsGrid: {
    marginBottom: 20
  },
  price: {
    marginTop: 30,
    marginBottom: 10
  }
});

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      address: "",
      city: "",
      state: "",
      postcode: "",
      phone: "",
      password: "",
      token: "",
      processing: false,
      error: "",
      success: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.password = React.createRef();
    this.confirmPassword = React.createRef();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  validatePassword = () => {
    const password = this.password.current;
    const confirmPassword = this.confirmPassword.current;
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    if (!regexp.test(password.value)) {
      password.setCustomValidity(
        "Password must be at least 8 characters long and have at least one uppercase letter and one lowercase letter."
      );
    } else {
      password.setCustomValidity("");
    }
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity(
        "The passwords you entered don't match. Try again."
      );
    } else {
      confirmPassword.setCustomValidity("");
    }
  };

  handlePasswordChange = event => {
    this.handleChange("password")(event);
    this.validatePassword();
  };

  // REVIEW:
  handleSubmit = event => {
    event.preventDefault();
    const contact =
      "Please try again or contact us for assistance at support@orbmaps.com";
    const errorMessage = `Registration unsuccessful. ${contact}`;
    this.setState({
      processing: true,
      error: ""
    });
    // this.props.stripe
    //   .createToken({ name: this.state.data.name })
    //   .then(({ token }) => {
    //     this.setState({
    //       token: token
    //     });
    //   });

    fetch(registerURL, {
      method: "POST",
      body: JSON.stringify(this.state.data),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (!response.ok || response === undefined) {
          return response.json().then(error => {
            throw error.message;
          });
        }
        return response.json();
      })
      .then(() => {
        this.setState({ success: true });
      })
      .catch(message => {
        this.setState({
          processing: false,
          error: message ? `${message} ${contact}` : errorMessage
        });
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <form onSubmit={this.handleSubmit}>
            <Paper elevation={14} className={classes.paper}>
              <img className={classes.logo} src={logo} alt="orbmaps logo" />
              {this.state.success ? (
                <Typography variant="subheading" gutterBottom>
                  Registration successful, thank you! Check your email account
                  for your username and password and follow the link provided to
                  log in.
                </Typography>
              ) : (
                <div>
                  <Typography variant="subheading" gutterBottom>
                    Please enter your registration details
                  </Typography>
                  <Grid
                    container
                    className={classes.inputsGrid}
                    wrap="nowrap"
                    spacing={0}
                    direction="column"
                    alignContent="center"
                  >
                    <Grid item>
                      <TextField
                        required
                        id="name"
                        label="Name"
                        className={classes.textField}
                        onChange={this.handleChange("name")}
                        autoComplete="name"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        id="email"
                        label="Email"
                        type="email"
                        className={classes.textField}
                        onChange={this.handleChange("email")}
                        autoComplete="email"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        id="company"
                        label="Company"
                        className={classes.textField}
                        onChange={this.handleChange("company")}
                        autoComplete="organization"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        id="address"
                        label="Address"
                        className={classes.textField}
                        onChange={this.handleChange("address")}
                        autoComplete="address-line1"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        id="city"
                        label="City"
                        className={classes.textField}
                        onChange={this.handleChange("city")}
                        autoComplete="address-level2"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        id="state"
                        label="State"
                        className={classes.textField}
                        onChange={this.handleChange("state")}
                        autoComplete="address-level1"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        id="postcode"
                        label="Postcode"
                        onChange={this.handleChange("postcode")}
                        autoComplete="postal-code"
                        type="tel"
                        className={classes.textField}
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        id="phone"
                        label="Phone"
                        onChange={this.handleChange("phone")}
                        autoComplete="tel"
                        type="tel"
                        className={classes.textField}
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        inputRef={element => (this.password.current = element)}
                        id="password"
                        label="Password"
                        onChange={this.handlePasswordChange}
                        autoComplete="new-password"
                        type="password"
                        className={classes.textField}
                        margin="dense"
                        helperText="Must contain a minimum of 8 characters and at least one uppercase and one lowercase letter"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        inputRef={element =>
                          (this.confirmPassword.current = element)
                        }
                        id="confirmPassword"
                        label="Confirm Password"
                        onChange={this.validatePassword}
                        autoComplete="new-password"
                        type="password"
                        className={classes.textField}
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.price}
                        variant="subheading"
                        color="primary"
                        gutterBottom
                      >
                        Presale Plan: 1 License - $195.00
                      </Typography>
                    </Grid>
                    <Grid item>
                      <CardSection />
                    </Grid>
                  </Grid>

                  <Button
                    className={classes.registerButton}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={this.state.processing}
                  >
                    Register
                  </Button>
                  <Grid
                    container
                    wrap="nowrap"
                    spacing={0}
                    direction="column"
                    alignContent="center"
                  >
                    {this.state.processing && (
                      <Grid item>
                        <CircularProgress className={classes.progress} />
                      </Grid>
                    )}
                    <Grid item>
                      <Typography className={classes.error}>
                        {this.state.error}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              )}
            </Paper>
          </form>
        </div>
      </div>
    );
  }
}

export default injectStripe(withStyles(styles)(RegisterForm));
