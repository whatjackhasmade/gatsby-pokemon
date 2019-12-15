import React from "react"
import { Link } from "gatsby"

const Info = props => {
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
  } = props

  return (
    <>
      <header id={id}>
        <Link to="/">View all pokemon</Link>
        <h2>{number}</h2>
        <span>...</span>
        <h1>{name}</h1>
        <p>Classification: {classification}</p>
        {types && types.length && (
          <>
            <p>Types</p>
            {types.map(type => (
              <p>{type}</p>
            ))}
          </>
        )}
        {resistant && resistant.length && (
          <>
            <p>Resistant To</p>
            {resistant.map(resistantSingle => (
              <p>{resistantSingle}</p>
            ))}
          </>
        )}
        {weaknesses && weaknesses.length && (
          <>
            <p>Types</p>
            {weaknesses.map(weakness => (
              <p>{weakness}</p>
            ))}
          </>
        )}
        <p>Flee rate: {fleeRate}</p>
        {height && (
          <p>
            Height:
            {Object.entries(height).map(([key, value]) => {
              return (
                <React.Fragment key={`height-${key}`}>
                  <span>{key}: </span>
                  <span>{value}</span>
                </React.Fragment>
              )
            })}
          </p>
        )}
        {weight && (
          <p>
            Weight:
            {Object.entries(weight).map(([key, value]) => {
              return (
                <React.Fragment key={`weight-${key}`}>
                  <span>{key}: </span>
                  <span>{value}</span>
                </React.Fragment>
              )
            })}
          </p>
        )}
        <p>Max CP: {maxCP}</p>
        <p>Max HP: {maxHP}</p>
        {evolutionRequirements && (
          <p>
            Evolution Requirements:
            {Object.entries(evolutionRequirements).map(([key, value]) => {
              return (
                <React.Fragment key={`evolutionRequirements-${key}`}>
                  <span>{key}: </span>
                  <span>{value}</span>
                </React.Fragment>
              )
            })}
          </p>
        )}
        {evolutions && evolutions.length && (
          <nav>
            {evolutions.map(evolution => (
              <p>{evolution.id}</p>
            ))}
          </nav>
        )}
      </header>
      <img alt={`Illustration of ${name}`} src={image} />
      <h2>Attacks</h2>
      {attacks &&
        Object.entries(attacks).map(([key, value]) => {
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

export default Info
