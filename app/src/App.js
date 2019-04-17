import React, { Component } from "react";
import "./App.css";
import Header from "./Assignment/Header/HeaderContainer";
import Content from "./Assignment/Content/ContentContainer";
import "toastr/build/toastr.min.css";
import { withStyles } from "@material-ui/core/styles";
import toastr from "toastr";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Image from "./assets/images/background.jpeg";

toastr.options.timeOut = 2000;
toastr.options.extendedTimeOut = 3000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    this.fetchExmpleData();
  }
  fetchExmpleData = () => {
    axios
      .get("data/exampleData.json")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        toastr.error(error);
      });
  };
  render() {
    const { RefreshTime: refreshTime } = this.state.data;
    const styles = {
      background: {
        backgroundImage: `url(${Image})`
      },
      backgroundColor: {
        background: "black"
      }
    };
    return (
      <div className="App App-header ">
        <Grid
          container
          direction="row"
          md="12"
          justify="center"
          alignItems="center"
          styles={styles.background}
        >
          <Grid item md="12">
            <Header
              refreshTime={refreshTime}
              title={"Conde Nast"}
              style={styles.background}
            />
          </Grid>
          <Grid item md="10">
            <Content data={this.state.data} />{" "}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles()(App);
