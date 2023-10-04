import React from "react";
import Container from "../UI/Container";

import './Tooltip.css'

const Tooltip = props => {
    if (props.isOpen) {
        return (
            <Container>
                <p>Helooooooo</p>
            </Container>
        )
    } else {

        return (
            <Container>
                {props.isOpen && (
                    <p>Helooooooo</p>
                )}
            </Container>

        )
    }
}
export default Tooltip