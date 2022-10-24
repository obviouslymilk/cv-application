import React, { Component } from "react";
import CVForm from "./cvform/CVForm";
import CVPreview from "./cvpreview/CVPreview";

class Main extends Component {
    render() {
        return (<main>
            <CVForm
                cv={this.props.cv}
                handlePersonalChange={this.props.handlePersonalChange}
                handleEducationChange={this.props.handleEducationChange}
                handleEducationAdd={this.props.handleEducationAdd}
                handleEducationDelete={this.props.handleEducationDelete}

                handleExperienceChange={this.props.handleExperienceChange}
                handleExperienceAdd={this.props.handleExperienceAdd}
                handleExperienceDelete={this.props.handleExperienceDelete}
                />
            <CVPreview cv={this.props.cv}  />
        </main>);
    }
}

export default Main;