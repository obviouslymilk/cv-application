import React from "react";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import '../../styles/CVForm.css'

function CVForm(props) {
    return (<div id="CVForm">
        <PersonalInfo info={props.cv.personal} onChange={props.handlePersonalChange} />
        <Experience data={props.cv.experience} onChange={props.handleExperienceChange} onAdd={props.handleExperienceAdd} onDelete={props.handleExperienceDelete} />
        <Education data={props.cv.education} onChange={props.handleEducationChange} onAdd={props.handleEducationAdd} onDelete={props.handleEducationDelete} />
    </div>);    
}

export default CVForm;