import React, { Component } from "react";
import Section from "../utils/Section";
import EducationInstance from "./EducationInstance";

class Education extends Component {
    render() {
        const children = this.props.data.map(item => {
            return <EducationInstance key={item.id} id={item.id} data={item} onChange={this.props.onChange} onDelete={this.props.onDelete} />
        })

        return (<Section title="Education">
            {children}
            <button onClick={this.props.onAdd} className="add">Add</button>
        </Section>);
    }
}

export default Education;