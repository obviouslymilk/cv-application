import React, { Component } from "react";
import Section from "../utils/Section";
import ExperienceInstance from "./ExperienceInstance";

class Experience extends Component {
    render() {
        const children = this.props.data.map(item => {
            return <ExperienceInstance key={item.id} id={item.id} data={item} onChange={this.props.onChange} onDelete={this.props.onDelete} />
        })

        return (<Section title="Experience">
            {children}
            <button onClick={this.props.onAdd} className="add">Add</button>
        </Section>);
    }
}

export default Experience;