import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
        <Grid container md={10} spacing={24}>
          {data &&
            Object.keys(data).map((value, key) => {
              if (value !== "RefreshTime") {
                return (
                  <Grid item md={4}>
                    <Paper>
                      <DataStatus name={value} dataStatus={data[value]} />
                    </Paper>
                  </Grid>
                );
              }
            })}
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Content);
