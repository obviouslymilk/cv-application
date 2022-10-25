import React, { Component } from "react";
import Input from "../utils/Input";

class ExperienceInstance extends Component {
    render() {
        const { from, to, position, company, location } = this.props.data;
        const onChange = this.props.onChange;
        return (<div id={this.props.id} className="instance">
            <Input type="text" name="from" placeholder="From" value={from} onChange={onChange}  />
            <Input type="text" name="to" placeholder="To" value={to} onChange={onChange}  />
            <Input type="text" name="position" placeholder="Position" value={position} onChange={onChange}  />
            <Input type="text" name="company" placeholder="Company Name" value={company} onChange={onChange}  />
            <Input type="text" name="location" placeholder="Location" value={location} onChange={onChange}  />
            <button onClick={this.props.onDelete}>Delete</button>
        </div>);
    }
}

export default ExperienceInstance;