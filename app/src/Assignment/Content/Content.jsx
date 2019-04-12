import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import DataStatus from "../Content/DataStatusComponent";

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

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      availableStatus: {
        complete: "Complete",
        qualityAlert: "Quality Alert",
        partialLoad: "Partial Load",
        noLoad: "No Load"
      }
    };
  }

  render() {
    const classes = this.props;
    const { data } = this.props;
    return (
      <div className={classes.root}>
        <DataStatus data={data} />
      </div>
    );
  }
}
export default withStyles(styles)(Content);
