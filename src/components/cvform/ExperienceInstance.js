import React, { Component } from "react";
import Input from "../utils/Input";

class ExperienceInstance extends Component {
    render() {
        const { from, to, position, company, location } = this.props.data;
        return (<div id={this.props.id}>
            <Input type="text" name="from" placeholder="From" />
            <Input type="text" name="to" placeholder="To" />
            <Input type="text" name="position" placeholder="Position" />
            <Input type="text" name="company" placeholder="Company Name" />
            <Input type="text" name="location" placeholder="Location" />
            <button>Delete</button>
        </div>);
    }
}

export default ExperienceInstance;