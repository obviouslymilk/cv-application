import React, { Component } from "react";
import Section from "../utils/Section";
import EducationInstance from "./EducationInstance.js";

class Education extends Component {
    render() {
        const children = this.props.data.map(item => {
            console.log(this.props.data);
            return <EducationInstance key={item.id} id={item.id} data={item} />
        })

        return (<Section title="Education">
            {children}
        </Section>);
    }
}

export default Education;