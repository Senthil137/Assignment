import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
//dataStatus={data[value]
const DataStatus = props => {
  const { data } = props;
  return (
    <Grid container md={10} spacing={24}>
      {data &&
        Object.keys(data).map((value, key) => {
          if (value !== "RefreshTime") {
            return (
              <Grid item md={4}>
                <Paper>
                  {console.log("value=>", value)}
                  <AnalyticsData name={value} dataStatus={data[value]} />
                </Paper>
              </Grid>
            );
          }
        })}
    </Grid>
  );
};
const AnalyticsData = props => {
  const { dataStatus } = props;
  return (
    <Paper>
      {dataStatus &&
        Object.values(dataStatus).map((status, key) => {
          return (
            <>
              <Typography varient="h5" component="h3">
                {status.name}
              </Typography>
              <Typography component="div">
                <Typography component="div">
                  {displayStatusbyDate(status.statusByDate)}
                </Typography>
              </Typography>
            </>
          );
        })}
    </Paper>
  );
};

function displayStatusbyDate(statusByDate) {
  let data;
  return (
    statusByDate &&
    statusByDate.map((byDate, index) => {
      return (
        <>
          <span key={index}>{byDate.status}</span>
          <span>{byDate.date}</span>
        </>
      );
    })
  );
}
export default withStyles(styles)(DataStatus);
