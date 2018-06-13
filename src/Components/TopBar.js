import React from "react";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import compose from "recompose/compose";
import logo from "../logo.png";

const topBarHeight = 60;
const logoHeight = 40;

const styles = {
  root: {
    paddingLeft: 20,
    paddingRight: 20
  },
  tabs: {
    height: topBarHeight
  },
  tab: {
    height: topBarHeight,
    marginLeft: 10,
    marginRight: 10,
    minWidth: 90
  },
  tabLabelContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  logo: {
    float: "left",
    height: logoHeight
  },
  gridContainer: {
    height: topBarHeight
  },
  gridItemLogo: {
    height: logoHeight
  },
  gridItemButton: {
    marginLeft: 30
  },
  gridItemSpacer: {
    flexGrow: 1
  },
  loginButton: {
    float: "right"
  }
};

class TopBar extends React.Component {
  state = {
    value: 0,
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = path => event => {
    // console.log(event, path);
    // const { history } = this.props;
    // history.push(path);
    this.setState({ anchorEl: null });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Paper className={classes.root}>
        <Grid
          container
          className={classes.gridContainer}
          alignItems="center"
          direction="row"
          justify="space-between"
        >
          <Grid item className={classes.gridItemLogo}>
            <img className={classes.logo} src={logo} alt="orbmaps logo" />
          </Grid>
          <Grid item className={classes.gridItemSpacer} />
          <Hidden mdUp>
            <IconButton
              // aria-label="More"
              aria-owns={anchorEl ? "menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose("/about")}>HOME</MenuItem>
              {/* <MenuItem onClick={changePath("/")}>ABOUT</MenuItem> */}
              <MenuItem onClick={this.handleClose}>PRICING</MenuItem>
              <MenuItem onClick={this.handleClose}>REGISTER</MenuItem>
            </Menu>
          </Hidden>
          <Hidden smDown>
            <Grid item>
              <Tabs
                className={classes.tabs}
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab
                  className={classes.tab}
                  classes={{ labelContainer: classes.tabLabelContainer }}
                  label="Home"
                />
                <Tab
                  className={classes.tab}
                  classes={{ labelContainer: classes.tabLabelContainer }}
                  label="Company"
                />
                <Tab
                  className={classes.tab}
                  classes={{ labelContainer: classes.tabLabelContainer }}
                  label="Pricing"
                />
                <Tab
                  className={classes.tab}
                  classes={{ labelContainer: classes.tabLabelContainer }}
                  label="Register"
                />
              </Tabs>
            </Grid>
            <Grid item className={classes.gridItemButton}>
              <Button
                className={classes.loginButton}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Paper>
    );
  }
}

export default compose(
  withStyles(styles),
  withWidth(),
  withRouter
)(TopBar);
