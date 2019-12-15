import React from "react"
import { Link } from "gatsby"

export default ({ pageContext }) => {
  const {
    attacks,
    classification,
    evolutionRequirements,
    evolutions,
    fleeRate,
    height,
    id,
    image,
    maxCP,
    maxHP,
    name,
    number,
    resistant,
    types,
    weaknesses,
    weight,
  } = pageContext

  return (
    <>
      <header>
        <nav>
          <Link to="/">View all pokemon</Link>
          <h2>{number}</h2>//<h1>{name}</h1>
        </nav>
      </header>
      <img alt={`Image of ${name}`} src={image} />
      <h2>Attacks</h2>
      {Object.entries(attacks).map(([key, value]) => {
        return (
          <div key={`attacks-${key}`}>
            <h3>{key}</h3>
            {attacks[key].map(attack => (
              <div key={attack.name}>
                <p>{attack.name}</p>
                <p>{attack.type}</p>
                <p>{attack.damage}</p>
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
