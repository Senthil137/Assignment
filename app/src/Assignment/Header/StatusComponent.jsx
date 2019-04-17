import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import complete from "../../assets/images/complete.png";
import noload from "../../assets/images/no-load.png";
import partial from "../../assets/images/partial-load.png";
import quality from "../../assets/images/quality-alert.png";
import schedule from "../../assets/images/schedule.png";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#282c34",
    color: "white"
  },
  body: {
    fontSize: 1,
    backgroundColor: "#282c34",
    border: "none"
  }
}))(TableCell);

const customStyle = {
  padding: "none"
  //color: "yellow"
};
const StatusComponent = props => {
  const classes = props;
  const tableHead = (
    <TableHead>
      <TableRow>
        <CustomTableCell style={customStyle} key={1}>
          {props.availableStatus.complete}
        </CustomTableCell>
        <CustomTableCell style={customStyle} key={2}>
          {props.availableStatus.qualityAlert}
        </CustomTableCell>
        <CustomTableCell style={customStyle} key={3}>
          {props.availableStatus.partialLoad}
        </CustomTableCell>
        <CustomTableCell style={customStyle} key={4}>
          {props.availableStatus.noLoad}
        </CustomTableCell>
        <CustomTableCell style={customStyle} key={4}>
          {props.availableStatus.schedule}
        </CustomTableCell>
      </TableRow>
    </TableHead>
  );
  const tableBody = (
    <TableBody>
      <TableRow className={classes.row}>
        <CustomTableCell style={customStyle}>
          <img
            width={50}
            height={50}
            alt={props.availableStatus.complete}
            src={complete}
          />
        </CustomTableCell>
        <CustomTableCell style={customStyle}>
          <img
            width={50}
            height={50}
            alt={props.availableStatus.qualityAlert}
            src={quality}
          />
        </CustomTableCell>
        <CustomTableCell style={customStyle}>
          <img
            width={50}
            height={50}
            alt={props.availableStatus.partialLoad}
            src={partial}
          />
        </CustomTableCell>
        <CustomTableCell style={customStyle}>
          <img
            width={50}
            height={50}
            alt={props.availableStatus.noLoad}
            src={noload}
          />
        </CustomTableCell>
        <CustomTableCell style={customStyle}>
          <img
            width={50}
            height={50}
            alt={props.availableStatus.schedule}
            src={schedule}
          />
        </CustomTableCell>
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
    // <Grid container md="10">
    //   <Grid item md="5">
    //     <img
    //       width={50}
    //       height={50}
    //       alt={props.availableStatus.complete}
    //       src={complete}
    //     />
    //     <span>{props.availableStatus.complete} </span>
    //     <img
    //       width={50}
    //       height={50}
    //       alt={props.availableStatus.qualityAlert}
    //       src={quality}
    //     />
    //     <span>{props.availableStatus.qualityAlert}</span>
    //   </Grid>

    //   <Grid item md="5">
    //     <img
    //       width={50}
    //       height={50}
    //       alt={props.availableStatus.partialLoad}
    //       src={partial}
    //     />
    //     <span>{props.availableStatus.partialLoad}</span>

    //     <img
    //       width={50}
    //       height={50}
    //       alt={props.availableStatus.noLoad}
    //       src={noload}
    //     />
    //     <span>{props.availableStatus.noLoad}</span>
    //   </Grid>
    // </Grid>
  );
};

export default StatusComponent;
