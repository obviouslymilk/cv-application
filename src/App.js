import React, { Component } from "react";
import Main from "./components/Main";
import { v4 as uuidv4 } from 'uuid';
import cv from './modules/cv-example';

class App extends Component {
  state = {
    cv: cv
  }

  newCV(prevState) {
    return Object.assign({}, prevState.cv);
  }


  handlePersonalChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      let newCV = this.newCV(prevState)
      newCV.personal[name] = value;
      return newCV;
    })
  }

  handleEducationChange = (e) => {
    const { name, value } = e.target;
    const education = this.state.cv.education;
    const instanceId = e.target.parentElement.id;
    const instanceIndex = education.indexOf(education.find(i => i.id === instanceId));
    
    this.setState(prevState => {
      let newCV = this.newCV(prevState);
      newCV.education[instanceIndex][name] = value;
      return newCV;
    })
  }

  handleEducationAdd = () => {
    let newCV = Object.assign({}, this.state.cv);
    newCV.education.push({
      id: uuidv4(),
      from: "",
      to: "",
      title: "",
      location: ""
    })

    this.setState({
      cv: newCV
    })
  }

  handleEducationDelete = (e) => {
    const instanceId = e.target.parentElement.id;
    let newCV = Object.assign({}, this.state.cv);
    newCV.education = newCV.education.filter(i => { 
      return i.id !== instanceId
    })

    this.setState({
      cv: newCV
    })
  }

  handleExperienceChange = (e) => {
    const { name, value } = e.target;
    const exp = this.state.cv.experience;
    const instanceId = e.target.parentElement.id;
    const instanceIndex = exp.indexOf(exp.find(i => i.id === instanceId));
    
    this.setState(prevState => {
      let newCV = this.newCV(prevState);
      newCV.experience[instanceIndex][name] = value;
      return newCV;
    })  
  }
    
  handleExperienceAdd = () => {
    let newCV = Object.assign({}, this.state.cv);
    newCV.experience.push({
      id: uuidv4(),
      from: "",
      to: "",
      position: "",
      company: "",
      location: ""
    })

    this.setState({
      cv: newCV
    })
  }

  handleExperienceDelete = (e) => {
    const instanceId = e.target.parentElement.id;
    let newCV = Object.assign({}, this.state.cv);
    newCV.experience = newCV.experience.filter(i => { 
      return i.id !== instanceId
    })

    this.setState({
      cv: newCV
    })
  }


  render() {
    return (<Main
      cv={this.state.cv}
      handlePersonalChange={this.handlePersonalChange}    
      handleEducationChange={this.handleEducationChange}
      handleEducationAdd={this.handleEducationAdd}
      handleEducationDelete={this.handleEducationDelete}

      handleExperienceChange={this.handleExperienceChange}
      handleExperienceAdd={this.handleExperienceAdd}
      handleExperienceDelete={this.handleExperienceDelete}
    />);
  }
}

export default App;
