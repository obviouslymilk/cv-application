import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import '../../styles/CVPreview.css'

function CVPreview(props) {
    return <div id="CVPreview">
        <PersonalInfo personal={props.cv.personal} />
        <Experience data={props.cv.experience} />
        <Education data={props.cv.education} />
    </div>;    
}

export default CVPreview;