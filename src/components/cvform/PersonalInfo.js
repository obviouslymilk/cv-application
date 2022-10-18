import React, { Component } from "react";
import Input from "../utils/Input";
import Section from '../utils/Section';

class PersonalInfo extends Component {
    render() {
        return (<Section title="Personal information">
            <Input type="text" placeholder="First Name" name="firstName" />
            <Input type="text" placeholder="Last Name" name="lastName" />
            <Input type="text" placeholder="Title" name="title" />
            <Input type="text" placeholder="Adress" name="adress" />
            <Input type="text" placeholder="Phone Number" name="phone" />
            <Input type="text" placeholder="E-mail" name="email" />
            <Input type="text" placeholder="Description" name="desc" />
        </Section>);
    }
}

export default PersonalInfo;