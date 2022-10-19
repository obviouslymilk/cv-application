import React, { Component } from "react";

class EducationInstance extends Component {
    render() {
        const data = this.props.data;
        return (<div>
            {data.from} - {data.to}
            <div>
                <h4>{data.title}, {data.location}</h4>
            </div>
        </div>);
    }
}

export default EducationInstance;