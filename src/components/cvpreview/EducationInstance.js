import React from "react";

function EducationInstance(props) {
    const data = props.data;
    return <div className="instance-preview">
        <p>{data.from} - {data.to}</p>
        <div>
            <h4>{data.title}, {data.location}</h4>
        </div>
    </div>;
}

export default EducationInstance;