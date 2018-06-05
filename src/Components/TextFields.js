import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class TextFields extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label="Name"
          className={classes.textField}
          onChange={this.handleChange("name")}
          margin="normal"
        />
        <TextField
          required
          id="email"
          label="Email"
          className={classes.textField}
          onChange={this.handleChange("email")}
          margin="normal"
        />
        <TextField
          required
          id="address"
          label="Address"
          className={classes.textField}
          onChange={this.handleChange("address")}
          margin="normal"
        />
        <TextField
          required
          id="city"
          label="City"
          className={classes.textField}
          onChange={this.handleChange("city")}
          margin="normal"
        />
        <TextField
          required
          id="state"
          label="State"
          className={classes.textField}
          onChange={this.handleChange("state")}
          margin="normal"
        />
        <TextField
          id="postcode"
          label="Postcode"
          onChange={this.handleChange("postcode")}
          type="number"
          className={classes.textField}
          InputLabelProps={{ shrink: true }}
          margin="normal"
        />
        <TextField
          id="phone"
          label="Phone"
          onChange={this.handleChange("Phone")}
          type="number"
          className={classes.textField}
          InputLabelProps={{ shrink: true }}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(TextFields);
