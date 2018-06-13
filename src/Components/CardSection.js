import React from "react";
// import Typography from "@material-ui/core/Typography";
import { CardElement } from "react-stripe-elements";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cardContainer: {
    backgroundColor: "white",
    height: "20px",
    padding: "10px 12px",
    borderRadius: "4px",
    border: "1px solid transparent",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.3)",
    webkitTransition: "box-shadow 150ms ease",
    transition: "box - shadow 150ms ease",
    maxWidth: 420,
    margin: "auto"
  }
});

class CardSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <label>
        {/* <Typography variant="caption" gutterBottom> */}
        {/* Card details */}
        {/* </Typography> */}
        <div className={classes.cardContainer}>
          <CardElement
            hidePostalCode={true}
            style={{ base: { fontSize: "18px" } }}
          />
        </div>
      </label>
    );
  }
}

export default withStyles(styles)(CardSection);
