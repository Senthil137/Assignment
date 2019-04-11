import React, { Component } from "react";
import AppTitleComponent from "./AppTitleComponent";
import DataRefreshTime from "./DataRefreshTImeComponent";
import StatusComponent from "./StatusComponent";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
        noLoad: "No Load"
      }
    };
  }

  render() {
    const { refreshTime } = this.props;
    const { availableStatus } = this.state;
    const classes = this.props;
    return (
      <div className={classes.root}>
        <Grid container md={10} spacing={24}>
          <Grid item md={4}>
            {/* <Paper> */}
            <AppTitleComponent title="Conde Nast" />
            {/* </Paper> */}
          </Grid>
          <Grid item md={4}>
            {/* <Paper> */}
            <DataRefreshTime refreshTime={refreshTime} />
            {/* </Paper> */}
          </Grid>
          <Grid item md={4}>
            {/* <Paper>Status</Paper> */}
            <StatusComponent availableStatus={availableStatus} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
