import React, { Component } from "react";

class PersonalInfo extends Component {
    render() {
        const personal = this.props.personal;

        return (<section className="personal">
            <h1>{personal.firstName} {personal.lastName}</h1>
            <h2>{personal.title}</h2>
            <div><strong>Adress</strong> {personal.adress}</div>
            <div><strong>Phone</strong> {personal.phone}</div>
            <div><strong>E-mail</strong> {personal.email}</div>
            <p>{personal.desc}</p>
        </section>);
    }
}

export default PersonalInfo;
