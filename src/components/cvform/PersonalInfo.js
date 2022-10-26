import React from "react";
import Input from "../utils/Input";
import Section from '../utils/Section';

function PersonalInfo(props) {
    const { firstName, lastName, title, adress, phone, email, desc } = props.info;
    return (<Section title="Personal information">
        <Input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={props.onChange} />
        <Input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={props.onChange} />
        <Input type="text" placeholder="Title" name="title" value={title} onChange={props.onChange} />
        <Input type="text" placeholder="Adress" name="adress" value={adress} onChange={props.onChange} />
        <Input type="text" placeholder="Phone Number" name="phone" value={phone} onChange={props.onChange} />
        <Input type="text" placeholder="E-mail" name="email" value={email} onChange={props.onChange} />
        <Input type="text" placeholder="Description" name="desc" value={desc} onChange={props.onChange} />
    </Section>);   
}

export default PersonalInfo;