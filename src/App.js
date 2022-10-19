import React, { Component } from "react";
import Main from "./components/Main";
import cv from './modules/cv-example';

class App extends Component {
  render() {
    return (<Main cv={cv} />);
  }
}

export default App;
