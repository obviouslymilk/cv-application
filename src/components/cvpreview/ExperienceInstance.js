import React, { Component } from "react";

class ExperienceInstance extends Component {
    render() {
        const data = this.props.data;
        return (<div>
            {data.from} - {data.to}
            <div>
                <h4>{data.position}</h4>
                <p>{data.company}, {data.location}</p>
            </div>
        </div>);
    }
}

export default ExperienceInstance;