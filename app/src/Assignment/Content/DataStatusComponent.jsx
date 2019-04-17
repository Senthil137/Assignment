import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DisplayByDate from "./DisplayByDateComponent";

const DataStatus = props => {
  const { data, classes } = props;
  return (
    <Grid
      container
      wrap="nowrap"
      md={12}
      ls={12}
      xs={12}
      spacing={0}
      zeroMinWidth
    >
      {data &&
        Object.keys(data).map(value => {
          if (value !== "RefreshTime") {
            return (
              <Grid
                item
                md={4}
                ls={4}
                xs={12}
                spacing={0}
                zeroMinWidth
                wrap="nowrab"
              >
                <AnalyticsData
                  classes={classes}
                  name={value}
                  dataStatus={data[value]}
                />
              </Grid>
            );
          }
        })}
    </Grid>
  );
};
const AnalyticsData = props => {
  const { dataStatus, classes } = props;
  return (
    <Paper>
      <Typography
        variant="h4"
        style={{
          backgroundColor: "#282c34",
          color: "#f89406",
          borderBottom: "1px solid",
          padding: "15px"
        }}
      >
        {props.name}
      </Typography>
      {dataStatus &&
        Object.values(dataStatus).map((status, key) => {
          return (
            <>
              <Typography
                variant="h6"
                id="tableTitle"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                {status.name}
              </Typography>
              <DisplayByDate
                classes={classes}
                statusByDate={status.statusByDate}
              />
            </>
          );
        })}
    </Paper>
  );
};
export default DataStatus;
