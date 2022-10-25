import React, { Component } from "react";

class ExperienceInstance extends Component {
    render() {
        const data = this.props.data;
        return (<div className="instance-preview">
            <p>{data.from} - {data.to}</p>
            <div>
                <h4>{data.position}</h4>
                <p>{data.company}, {data.location}</p>
            </div>
        </div>);
    }
}

export default ExperienceInstance;