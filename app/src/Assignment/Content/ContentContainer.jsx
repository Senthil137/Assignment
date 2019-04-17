import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import DataStatus from "./DataStatusComponent";

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

const Content = props => {
  const classes = props;
  const { data } = props;
  return (
    <div className={classes.root}>
      <DataStatus data={data} />
    </div>
  );
};
export default withStyles(styles)(Content);
