import React from "react";
import Container from "../UI/Container";

import './Tooltip.css'

const Tooltip = props => {
    console.log('tooltip shows: ', props.showTooltip)
    return (
        <Container className={`${props.showTooltip ? "active" : ""} show`}>
            {props.children}
        </Container>
    )
}
export default Tooltip