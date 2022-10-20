import React, { Component } from "react";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

class CVForm extends Component {
    render() {
        return (<div className="CVForm">  
            <PersonalInfo info={this.props.cv.personal} onChange={this.props.handlePersonalChange} />
            <Experience data={this.props.cv.experience} />
            <Education data={this.props.cv.education} onChange={this.props.handleEducationChange} />
        </div>);
    }
}

export default CVForm;