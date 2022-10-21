import React, { Component } from "react";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

class CVForm extends Component {
    render() {
        return (<div className="CVForm">  
            <PersonalInfo info={this.props.cv.personal} onChange={this.props.handlePersonalChange} />
            <Experience data={this.props.cv.experience} onChange={this.props.handleExperienceChange} onAdd={this.props.handleExperienceAdd} onDelete={this.props.handleExperienceDelete} />
            <Education data={this.props.cv.education} onChange={this.props.handleEducationChange} onAdd={this.props.handleEducationAdd} onDelete={this.props.handleEducationDelete} />
        </div>);
    }
}

export default CVForm;