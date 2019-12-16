import React from "react"
import StyledBadge from "./badgeStyles"

const Badge = ({ children, type }) => {
  return (
    <StyledBadge className="badge" type={type}>
      {children}
    </StyledBadge>
  )
}

export default Badge
