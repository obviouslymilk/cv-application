import React, { Component } from "react";
import Section from "../utils/Section";
import ExperienceInstance from "./ExperienceInstance";

class Experience extends Component {
    render() {
        const children = this.props.data.map(item => {
            return <ExperienceInstance key={item.id} id={item.id} data={item} />
        })

        return (<Section title="Experience">
            {children}
        </Section>);
    }
}

export default Experience;