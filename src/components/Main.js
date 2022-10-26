import React from "react";
import CVForm from "./cvform/CVForm";
import CVPreview from "./cvpreview/CVPreview";

function Main(props) {
    return <main>
        <CVForm
            personal={props.personal}
            experience={props.experience}
            education={props.education}
            handlePersonalChange={props.handlePersonalChange}
            handleEducationChange={props.handleEducationChange}
            handleEducationAdd={props.handleEducationAdd}
            handleEducationDelete={props.handleEducationDelete}

            handleExperienceChange={props.handleExperienceChange}
            handleExperienceAdd={props.handleExperienceAdd}
            handleExperienceDelete={props.handleExperienceDelete}
            />
        <CVPreview
            personal={props.personal}
            experience={props.experience}
            education={props.education}
        />
    </main>;
}

export default Main;