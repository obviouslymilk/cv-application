import React, { Component } from "react";
import CVForm from "./cvform/CVForm";
import CVPreview from "./cvpreview/CVPreview";

class Main extends Component {
    render() {
        return (<div>
            <CVForm
                cv={this.props.cv}
                handlePersonalChange={this.props.handlePersonalChange}
                handleEducationChange={this.props.handleEducationChange}
                handleEducationAdd={this.props.handleEducationAdd}
                handleEducationDelete={this.props.handleEducationDelete}
                />
            <CVPreview cv={this.props.cv}  />
        </div>);
    }
}

export default Main;