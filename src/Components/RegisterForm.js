import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import logo from "../logo.png";

const registerURL = process.env.REACT_APP_REGISTER_URL;

const styles = theme => ({
  registerButton: {
    marginTop: theme.spacing.unit * 4,
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
    padding: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  error: {
    color: "red"
  },
  logo: {
    width: 300,
    margin: theme.spacing.unit
  }
});

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        company: "",
        email: "",
        address: "",
        city: "",
        state: "",
        postcode: "",
        phone: "",
        password: ""
      },
      processing: false,
      error: "",
      success: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.password = React.createRef();
    this.confirmPassword = React.createRef();
  }

  handleChange = name => event => {
    const data = Object.assign({}, this.state.data);
    data[name] = event.target.value;
    this.setState({
      data: data
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

  handleSubmit = event => {
    event.preventDefault();
    const errorMessage =
      "Registration unsuccessful. Contact us for assistance at support@orbmaps.com";
    this.setState({
      processing: true,
      error: ""
    });
    fetch(registerURL, {
      method: "POST",
      body: JSON.stringify(this.state.data),
      headers: { "Content-Type": "application/json" }
    })
      .catch(() => {
        this.setState({
          processing: false,
          error: errorMessage
        });
      })
      .then(response => {
        if (response.ok) {
          this.setState({ success: true });
        } else {
          this.setState({
            processing: false,
            error: errorMessage
          });
        }
      });
  };

  render() {
    const { classes } = this.props;
    return this.state.success ? (
      <Typography variant="subheading" gutterBottom>
        Registration successful, thank you for your purchase! Check your email
        account for your username and password and follow the link provided to
        log in.
      </Typography>
    ) : (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <form onSubmit={this.handleSubmit}>
            <Paper elevation={20} className={classes.paper}>
              <img className={classes.logo} src={logo} alt="orbmaps logo" />
              <Typography variant="subheading" gutterBottom>
                Please enter your registration details
              </Typography>
              <Grid
                container
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
                    margin="dense"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="postcode"
                    label="Postcode"
                    onChange={this.handleChange("postcode")}
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
                    onChange={event => {
                      this.handleChange("password")(event);
                      this.validatePassword();
                    }}
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
                    type="password"
                    className={classes.textField}
                    margin="dense"
                  />
                </Grid>
              </Grid>
              <Button
                className={classes.registerButton}
                variant="contained"
                color="primary"
                type="submit"
              >
                Register
              </Button>
              {/* <button disabled={this.state.processing}>Register</button> */}
            </Paper>
            {this.state.processing && (
              <div>
                <Typography variant="subheading" gutterBottom>
                  Processing
                </Typography>
                <CircularProgress className={classes.progress} />
              </div>
            )}
            <Typography className={classes.error}>
              {this.state.error}
            </Typography>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RegisterForm);
