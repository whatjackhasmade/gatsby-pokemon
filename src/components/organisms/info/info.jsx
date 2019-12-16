import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Badge from "../../atoms/badge/badge"

import Attacks from "../../molecules/attacks/Attacks"

const StyledInfo = styled.main`
  margin: 15px;
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
            <p>Classification: {classification}</p>
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
      {types && types.length && (
        <>
          {types.map(type => (
            <Badge type={type}>{type}</Badge>
          ))}
        </>
      )}
      {resistant && resistant.length && (
        <>
          <p>Resistant To</p>
          {resistant.map(resistantSingle => (
            <Badge type={resistantSingle}>{resistantSingle}</Badge>
          ))}
        </>
      )}
      {weaknesses && weaknesses.length && (
        <>
          <p>Weakness to</p>
          {weaknesses.map(weakness => (
            <Badge type={weakness}>{weakness}</Badge>
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

      {/* <img alt={`Illustration of ${name}`} src={image} /> */}
      <h2>Attacks</h2>
      <Attacks attacks={attacks} />
    </StyledInfo>
  )
}

export default Info
