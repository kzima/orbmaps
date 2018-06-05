import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import { StripeProvider } from "react-stripe-elements";

// import MyStoreCheckout from "./MyStoreCheckout";

const styles = theme => ({});
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>test</div>
      // <StripeProvider apiKey="pk_test_12345">
      //   <MyStoreCheckout />
      // </StripeProvider>
    );
  }
}
export default withStyles(styles)(HomePage);
