import React from "react";
import Section from "../utils/Section";
import ExperienceInstance from "./ExperienceInstance";

function Experience(props) {
    const children = props.data.map(item => {
        return <ExperienceInstance key={item.id} id={item.id} data={item} onChange={props.onChange} onDelete={props.onDelete} />
    })

    return (<Section title="Experience">
        {children}
        <button onClick={props.onAdd} className="add">Add</button>
    </Section>);   
}

export default Experience;