import React, { Component } from "react";
import Section from "../utils/Section";
import EducationInstance from "./EducationInstance";

class Education extends Component {
    render() {
        const children = this.props.data.map(item => {
            return <EducationInstance key={item.id} id={item.id} />
        })

        return (<Section title="Education">
            {children}
            <button>Add</button>
        </Section>);
    }
}

export default Education;