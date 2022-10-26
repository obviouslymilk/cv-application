import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import '../../styles/CVPreview.css'

function CVPreview(props) {
    return <div id="CVPreview">
        <PersonalInfo personal={props.personal} />
        <Experience data={props.experience} />
        <Education data={props.education} />
    </div>;    
}

export default CVPreview;