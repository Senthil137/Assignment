import React, { Component } from "react";
import AppTitleComponent from "./AppTitleComponent";
import DataRefreshTime from "./DataRefreshTImeComponent";
import StatusComponent from "./StatusComponent";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableStatus: {
        complete: "Complete",
        qualityAlert: "Quality Alert",
        partialLoad: "Partial Load",
        noLoad: "No Load",
        schedule: "Schedule"
      }
    };
  }

  render() {
    const { refreshTime } = this.props;
    const { availableStatus } = this.state;
    const classes = this.props;
    return (
      <div className={classes.root}>
        <Grid container md={12} spacing={24}>
          <Grid item md={4} ls={6} xs={6}>
            <AppTitleComponent title="Data Status" name="Condé Nast" />
          </Grid>
          <Grid item md={3} ls={6} xs={6}>
            <DataRefreshTime refreshTime={refreshTime} />
          </Grid>
          <Grid item md={4} ls={12} xs={12}>
            <StatusComponent availableStatus={availableStatus} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
