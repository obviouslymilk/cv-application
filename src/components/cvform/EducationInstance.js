import React, { Component } from "react";
import Input from "../utils/Input";

class EducationInstance extends Component {
    render() {
        const { from, to, title, location } = this.props.data;
        const onChange = this.props.onChange;
        return (<div id={this.props.id}>
            <Input type="text" name="from" placeholder="From" value={from} onChange={onChange} />
            <Input type="text" name="to" placeholder="To" value={to} onChange={onChange} />
            <Input type="text" name="title" placeholder="Degree" value={title} onChange={onChange} />
            <Input type="text" name="location" placeholder="University Location" value={location} onChange={onChange} />
            <button onClick={this.props.onDelete}>Delete</button>
        </div>);
    }
}

export default EducationInstance;