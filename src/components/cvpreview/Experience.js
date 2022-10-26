import React from "react";
import Section from "../utils/Section";
import ExperienceInstance from "./ExperienceInstance";

function Experience(props) {
    const children = props.data.map(item => {
        return <ExperienceInstance key={item.id} id={item.id} data={item} />
    })

    return <Section title="Experience" id="experience">
        {children}
    </Section>;    
}

export default Experience;