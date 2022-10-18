import React, { Component } from "react";
import Section from "../utils/Section";
import ExperienceInstance from "./ExperienceInstance";

class Experience extends Component {
    render() {
        const children = this.props.experience.map(item => {
            return <ExperienceInstance key={item.id} id={item.id} />
        })

        return (<Section title="Experience">
            {children}
            <button>Add</button>
        </Section>);
    }
}

export default Experience;