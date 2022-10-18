import React, { Component } from "react";

class Input extends Component {
    render() {
        const { type, name, onChange, value, placeholder } = this.props;
        return (<input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder}></input>);
    }
}

export default Input;