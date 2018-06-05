import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>HOME PAGE</div>;
  }
}
export default withStyles(styles)(HomePage);
