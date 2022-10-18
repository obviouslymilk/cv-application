import React, { Component } from "react";
import Input from "../utils/Input";
import Section from '../utils/Section';

class PersonalInfo extends Component {
    render() {
        const { firstName, lastName, title, adress, phone, email, desc } = this.props.info;
        return (<Section title="Personal information">
            <Input type="text" placeholder="First Name" name="firstName" value={firstName} />
            <Input type="text" placeholder="Last Name" name="lastName" value={lastName}/>
            <Input type="text" placeholder="Title" name="title" value={title} />
            <Input type="text" placeholder="Adress" name="adress" value={adress} />
            <Input type="text" placeholder="Phone Number" name="phone" value={phone} />
            <Input type="text" placeholder="E-mail" name="email" value={email} />
            <Input type="text" placeholder="Description" name="desc" value={desc} />
        </Section>);
    }
}

export default PersonalInfo;