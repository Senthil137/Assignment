import React, { Component } from "react";
import "./App.css";
import Header from "./Assignment/Header/HeaderContainer";
import Content from "./Assignment/Content/Content";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
import axios from "axios";

toastr.options.timeOut = 2000;
toastr.options.extendedTimeOut = 3000;

class App extends Component {
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

    return (
      <div className="App">
        <header className="r">
          <Header refreshTime={refreshTime} title={"Conde Nast"} />
          <Content data={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
