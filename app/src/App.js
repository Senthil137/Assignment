import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Assignment/HeaderContainer";
import "toastr/build/toastr.min.css";
import toastr from "toastr";

toastr.options.timeOut = 2000;
toastr.options.extendedTimeOut = 3000;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header test="testtt" />
        </header>
      </div>
    );
  }
}

export default App;
