import React from "react";

function Input(props) {
    const { type, name, onChange, value, placeholder } = props;
    return <input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder}></input>;   
}

export default Input;