import React, { Component } from "react";

function Section(props) {
        const { title, children} = props;

        return <section>
            <h2>{title}</h2>
            {children}
        </section>;
}

export default Section