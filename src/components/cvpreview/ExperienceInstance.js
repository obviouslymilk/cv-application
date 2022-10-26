import React from "react";

function ExperienceInstance(props) {
    const data = props.data;
    return <div className="instance-preview">
        <p>{data.from} - {data.to}</p>
        <div>
            <h4>{data.position}</h4>
            <p>{data.company}, {data.location}</p>
        </div>
    </div>;    
}

export default ExperienceInstance;