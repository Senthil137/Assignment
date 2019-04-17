import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import GetStatusImage from "./GetStatusImage";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#282c34",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 1
  }
}))(TableCell);

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#282c34"
  },
  paper: {
    padding: "0px",
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});
const customStyle = {
  padding: "1px 1px 1px"
};
function DisplayByDate(props) {
  const { classes, statusByDate } = props;
  const tableHead = (
    <TableHead>
      <TableRow>
        {statusByDate &&
          statusByDate.map((byDate, index) => {
            return (
              <CustomTableCell style={customStyle} key={index}>
                {byDate.date}
              </CustomTableCell>
            );
          })}
      </TableRow>
    </TableHead>
  );
  const tableBody = (
    <TableBody>
      <TableRow className={classes.row}>
        {statusByDate &&
          statusByDate.map((byDate, index) => {
            return (
              <CustomTableCell style={customStyle}>
                <GetStatusImage key={index} status={byDate.status} />
              </CustomTableCell>
            );
          })}
      </TableRow>
    </TableBody>
  );
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-labelledby="tableTitle">
        {tableHead}
        {tableBody}
      </Table>
    </Paper>
  );
}
export default withStyles(styles)(DisplayByDate);
