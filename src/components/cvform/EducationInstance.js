import React, { Component } from "react";
import Input from "../utils/Input";

class ExperienceInstance extends Component {
    render() {
        return (<div id={this.props.id}>
            <Input type="text" name="from" placeholder="From" />
            <Input type="text" name="to" placeholder="To" />
            <Input type="text" name="title" placeholder="Degree" />
            <Input type="text" name="location" placeholder="University Location" />
            <button>Delete</button>
        </div>);
    }
}

export default ExperienceInstance;