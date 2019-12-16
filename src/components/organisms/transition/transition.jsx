import React from "react"

import StyledTransition from "./transitionStyles"

const Transition = ({ children }) => (
  <StyledTransition className="transition">
    <div></div>
    <div className="transition__content">
      <div>
        <span>{children}</span>
      </div>
    </div>
    <div></div>
  </StyledTransition>
)

export default Transition
