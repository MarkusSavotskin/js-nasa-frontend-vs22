import React from "react";
import './Tooltip.css'

const Tooltip = props => {
  return (
      <div className={`${!props.showTooltip ? "active" : ""} ${props.child}`}>
        {props.children}
      </div>
  )
}
export default Tooltip