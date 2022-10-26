import React from "react";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import '../../styles/CVForm.css'

function CVForm(props) {
    return (<div id="CVForm">
        <PersonalInfo info={props.personal} onChange={props.handlePersonalChange} />
        <Experience data={props.experience} onChange={props.handleExperienceChange} onAdd={props.handleExperienceAdd} onDelete={props.handleExperienceDelete} />
        <Education data={props.education} onChange={props.handleEducationChange} onAdd={props.handleEducationAdd} onDelete={props.handleEducationDelete} />
    </div>);    
}

export default CVForm;