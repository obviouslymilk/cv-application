import React, { Component } from "react";

class EducationInstance extends Component {
    render() {
        const data = this.props.data;
        return (<div className="instance-preview">
            <p>{data.from} - {data.to}</p>
            <div>
                <h4>{data.title}, {data.location}</h4>
            </div>
        </div>);
    }
}

export default EducationInstance;