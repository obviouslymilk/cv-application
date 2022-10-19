import React, { Component } from "react";

class PersonalInfo extends Component {
    render() {
        const personal = this.props.personal;

        return (<section>
            <h1>{personal.firstName} {personal.lastName}</h1>
            <h2>{personal.title}</h2>
            <strong>Adress</strong> {personal.adress}
            <strong>Phone</strong> {personal.phone}
            <strong>E-mail</strong> {personal.email}
            <p>{personal.desc}</p>
        </section>);
    }
}

export default PersonalInfo;
