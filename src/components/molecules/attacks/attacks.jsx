import React from "react"

import Badge from "../../atoms/badge/badge"

import StyledAttacks from "./attacksStyles"

const Attacks = ({ attacks }) => {
  if (!attacks) return null

  return (
    <StyledAttacks>
      {Object.entries(attacks).map(([key, value]) => (
        <div key={`attacks-${key}`}>
          <h3>{key}</h3>
          <div className="attacks__group">
            {attacks[key].map(attack => (
              <div key={attack.name}>
                <p>{attack.name}</p>
                <Badge type={attack.type}>{attack.type}</Badge>
                <p>{attack.damage}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </StyledAttacks>
  )
}

export default Attacks
