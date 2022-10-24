import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import '../../styles/CVPreview.css'

class CVPreview extends Component {
    render() {
        return (<div id="CVPreview">
            <PersonalInfo personal={this.props.cv.personal} />
            <Experience data={this.props.cv.experience} />
            <Education data={this.props.cv.education} />
        </div>);
    }
}

export default CVPreview;