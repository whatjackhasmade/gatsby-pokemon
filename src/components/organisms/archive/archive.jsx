import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const StyledArchive = styled.section`
  padding: 15px;

  .grid {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, 1fr);
    padding: 15px;
  }
`

const StyledPokemonInfo = styled.div`
  a {
    align-items: center;
    justify-content: flex-end;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;

    color: inherit;
    text-decoration: none;
  }

  img {
    margin-right: 20px;
    width: 40px;
  }
`

const Archive = ({ pokemon }) => {
  if (!pokemon) return null
  if (!pokemon.length) return null

  return (
    <StyledArchive className="archive">
      <div className="grid">
        {pokemon.map(pokemon => (
          <StyledPokemonInfo>
            <Link to={pokemon.slug}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.image} />
            </Link>
          </StyledPokemonInfo>
        ))}
      </div>
    </StyledArchive>
  )
}

export default Archive
