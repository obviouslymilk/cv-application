import React, { Component } from "react";
import Input from "../utils/Input";
import Section from '../utils/Section';

class PersonalInfo extends Component {
    render() {
        const { firstName, lastName, title, adress, phone, email, desc } = this.props.info;
        return (<Section title="Personal information">
            <Input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={this.props.onChange} />
            <Input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={this.props.onChange} />
            <Input type="text" placeholder="Title" name="title" value={title} onChange={this.props.onChange} />
            <Input type="text" placeholder="Adress" name="adress" value={adress} onChange={this.props.onChange} />
            <Input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={this.props.onChange} />
            <Input type="text" placeholder="E-mail" name="email" value={email} onChange={this.props.onChange} />
            <Input type="text" placeholder="Description" name="desc" value={desc} onChange={this.props.onChange} />
        </Section>);
    }
}

export default PersonalInfo;