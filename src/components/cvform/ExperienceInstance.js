import React, { Component } from "react";
import Input from "../utils/Input";

class ExperienceInstance extends Component {
    render() {
        return (<div>
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