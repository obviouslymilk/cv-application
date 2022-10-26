import React from "react";
import Section from "../utils/Section";
import EducationInstance from "./EducationInstance";

function Education(props) {
    const children = props.data.map(item => {
        return <EducationInstance key={item.id} id={item.id} data={item} onChange={props.onChange} onDelete={props.onDelete} />
    })

    return (<Section title="Education">
        {children}
        <button onClick={props.onAdd} className="add">Add</button>
    </Section>);   
}

export default Education;