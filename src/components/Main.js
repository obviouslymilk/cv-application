import React from "react";
import CVForm from "./cvform/CVForm";
import CVPreview from "./cvpreview/CVPreview";

function Main(props) {
    return <main>
        <CVForm
            cv={props.cv}
            handlePersonalChange={props.handlePersonalChange}
            handleEducationChange={props.handleEducationChange}
            handleEducationAdd={props.handleEducationAdd}
            handleEducationDelete={props.handleEducationDelete}

            handleExperienceChange={props.handleExperienceChange}
            handleExperienceAdd={props.handleExperienceAdd}
            handleExperienceDelete={props.handleExperienceDelete}
            />
        <CVPreview cv={props.cv}  />
    </main>;
}

export default Main;