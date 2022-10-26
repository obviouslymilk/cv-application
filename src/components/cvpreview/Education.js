import React from "react";
import Section from "../utils/Section";
import EducationInstance from "./EducationInstance.js";

function Education(props) {
    const children = props.data.map(item => {
        return <EducationInstance key={item.id} id={item.id} data={item} />
    })

    return <Section title="Education">
        {children}
    </Section>;    
}

export default Education;