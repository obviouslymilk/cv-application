import React from "react";
import Input from "../utils/Input";

function ExperienceInstance(props) {
    const { from, to, position, company, location } = props.data;
    const onChange = props.onChange;
    
    return <div id={props.id} className="instance">
        <Input type="text" name="from" placeholder="From" value={from} onChange={onChange}  />
        <Input type="text" name="to" placeholder="To" value={to} onChange={onChange}  />
        <Input type="text" name="position" placeholder="Position" value={position} onChange={onChange}  />
        <Input type="text" name="company" placeholder="Company Name" value={company} onChange={onChange}  />
        <Input type="text" name="location" placeholder="Location" value={location} onChange={onChange}  />
        <button onClick={props.onDelete}>Delete</button>
    </div>;  
}

export default ExperienceInstance;