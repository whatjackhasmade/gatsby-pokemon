import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Credit from "../credit/credit"
import Header from "../header/header"

const settings = {
  arrows: false,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1,
}

const StyledArchive = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 15px;

  .slider {
    flex: 1;

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    cursor: grab;
  }

  .slick-slide {
    align-items: center;
    justify-content: center;
    display: flex !important;
  }

  .slick-track img {
    max-height: 60px;
    max-width: 100px;
    transition: max-width 0.5s ease, max-height 0.5s ease;
  }

  .slick-track .slick-center img {
    max-height: 160px;
    max-width: 160px;
  }
`

const StyledPokemonInfo = styled.div`
  a {
    align-items: center;
    justify-content: flex-end;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;

    color: inherit;
    text-decoration: none;
  }

  img {
    margin-bottom: 20px;

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
      <Header />
      <Slider className="slider" ref={sliderRef} {...settings}>
        {pokemon.map(pokemon => (
          <SinglePokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Slider>
      <Credit />
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
