import React, { Component } from "react";
import Main from "./components/Main";
import cv from './modules/cv-example';

class App extends Component {
  state = {
    cv: cv
  }


  handlePersonalChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      let newCV = Object.assign({}, prevState.cv);
      newCV.personal[name] = value;
      return newCV;
    })
  }

  handleEducationChange = () => {
    console.log('ed');
  }
    

  render() {
    return (<Main
      cv={this.state.cv}
      handlePersonalChange={this.handlePersonalChange}    
      handleEducationChange={this.handleEducationChange}
    />);
  }
}

export default App;
