import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Badge from "../../atoms/badge/badge"

const StyledInfo = styled.main`
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;

  a {
    color: inherit;
  }

  header {
    display: flex;

    justify-content: space-between;
  }

  .pokemon__evolutions {
    align-items: flex-start;
    display: flex;

    img {
      margin-right: 24px;
      max-height: 100px;
    }
  }

  .pokemon__intro {
    align-items: flex-start;
    display: flex;

    img {
      margin-right: 24px;
      max-height: 100px;
    }
  }

  .pokemon__title {
    display: flex;

    * {
      margin: 0;
    }

    h1 {
      &:before {
        content: "//";
        margin: 0 8px;
      }
    }

    h1,
    h2 {
      font-size: 24px;
    }
  }

  .pokemon__groups {
    display: flex;
    margin: 32px auto;

    h2 {
      margin: 0 0 8px;

      text-transform: capitalize;
    }

    > div {
      width: 48%;
      width: calc(50% - 30px);
    }

    > div + div {
      margin-left: 30px;
      padding-left: 30px;
      border-left: 1px solid grey;
    }
  }

  .pokemonm__attacks {
    display: flex;

    > div {
      + div {
        margin-left: 16px;
      }
    }
  }

  .pokemomn__types {
    margin-top: 8px;
  }

  .nav--primary {
    display: flex;
    flex-direction: column;
  }
`

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
    <StyledInfo>
      <header id={id}>
        <div className="pokemon__intro">
          <img src={image} alt={`Illustration of ${name}`} />
          <nav className="nav--primary">
            <Link to="/">View all pokemon</Link>
            <div className="pokemon__title">
              <h2>{number}</h2>
              <h1>{name}</h1>
            </div>
            {types && types.length && (
              <div className="pokemomn__types">
                {types.map(type => (
                  <Badge type={type}>{type}</Badge>
                ))}
              </div>
            )}
            {/* <p>Classification: {classification}</p> */}
          </nav>
        </div>
        {evolutions && evolutions.length && (
          <nav className="pokemon__evolutions">
            {evolutions.map(evolution => (
              <Link to={`/${evolution.slug}`}>
                <img src={evolution.image} alt={`Illustration of ${name}`} />
                <p>{evolution.name}</p>
              </Link>
            ))}
          </nav>
        )}
      </header>

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
      <section className="pokemon__groups">
        {resistant && resistant.length && (
          <div>
            <h2>Resistant To</h2>
            {resistant.map(resistantSingle => (
              <Badge type={resistantSingle}>{resistantSingle}</Badge>
            ))}
          </div>
        )}
        {weaknesses && weaknesses.length && (
          <div>
            <h2>Weakness to</h2>
            {weaknesses.map(weakness => (
              <Badge type={weakness}>{weakness}</Badge>
            ))}
          </div>
        )}
      </section>
      <section className="pokemon__groups">
        {Object.entries(attacks).map(([key, value]) => (
          <div key={`attacks-${key}`}>
            <h2>{key} Attacks</h2>
            <div className="pokemonm__attacks">
              {attacks[key].map(attack => (
                <div key={attack.name}>
                  <p>{attack.name}</p>
                  <Badge type={attack.type}>{attack.type}</Badge>
                  <p>{attack.damage} damage</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </StyledInfo>
  )
}

export default Info
