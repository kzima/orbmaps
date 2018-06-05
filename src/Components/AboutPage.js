import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});
class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>ABOUT PAGE</div>;
  }
}
export default withStyles(styles)(AboutPage);
