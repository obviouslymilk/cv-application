import React from "react";
import Input from "../utils/Input";

function EducationInstance(props) {
    const { from, to, title, location } = props.data;
    const onChange = props.onChange;

    return <div id={props.id} className="instance">
        <Input type="text" name="from" placeholder="From" value={from} onChange={onChange} />
        <Input type="text" name="to" placeholder="To" value={to} onChange={onChange} />
        <Input type="text" name="title" placeholder="Degree" value={title} onChange={onChange} />
        <Input type="text" name="location" placeholder="University" value={location} onChange={onChange} />
        <button onClick={props.onDelete}>Delete</button>
    </div>;
}

export default EducationInstance;