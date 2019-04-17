import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: "#282c34",
    color: "white"
  }
});
const customStyle = { backgroundColor: "#282c34", color: "white" };
const DataRefreshTime = props => {
  const { classes } = props;
  return (
    <div style={styles.backgroundColor}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h6" component="h6" style={customStyle}>
          UPDATED
        </Typography>
        <Typography variant="h4" component="h4" style={customStyle}>
          {props.refreshTime}
        </Typography>
      </Paper>
    </div>
  );
};
export default withStyles(styles)(DataRefreshTime);
