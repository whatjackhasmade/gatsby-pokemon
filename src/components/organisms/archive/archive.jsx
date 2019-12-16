import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"

const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
}

const StyledArchive = styled.section`
  padding: 15px;
`

const StyledPokemonInfo = styled.div`
  height: 200px;

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
    width: ${props => (props.inView ? `90px` : `40px`)};

    transition: 1s width ease;
  }
`

const Archive = ({ pokemon }) => {
  const sliderRef = useRef(null)

  useEffect(() => {
    let slickListDiv = document.getElementsByClassName("slick-list")[0]
    slickListDiv.addEventListener("wheel", event => {
      event.preventDefault()
      event.deltaY > 0
        ? sliderRef.current.slickNext()
        : sliderRef.current.slickPrev()
    })
  }, [])

  if (!pokemon) return null
  if (!pokemon.length) return null

  return (
    <StyledArchive className="archive">
      <div>
        <Slider ref={sliderRef} {...settings}>
          {pokemon.map(pokemon => (
            <SinglePokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </Slider>
      </div>
    </StyledArchive>
  )
}

const SinglePokemon = ({ pokemon }) => {
  return (
    <StyledPokemonInfo className="pokemon">
      <Link to={`/${pokemon.slug}`}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} />
      </Link>
    </StyledPokemonInfo>
  )
}

export default Archive
