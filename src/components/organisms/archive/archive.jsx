import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Credit from "../credit/credit"
import Header from "../header/header"

const settings = {
  arrows: false,
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
}

const StyledArchive = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 15px;

  .slider {
    align-items: center;
    display: flex;
    flex: 1;

    height: 100%;

    cursor: grab;
  }

  .slick-slide {
    align-items: center;
    justify-content: center;
    display: flex !important;
    min-height: 400px;

    opacity: 0;
    transition: 1s opacity ease;

    &.slick-active {
      opacity: 1;
    }
  }

  .slick-track .slick-center {
    h2 {
      opacity: 1;
    }

    .pokemon__image {
      width: 160px;
    }
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

    &:focus {
      outline-offset: 16px;
    }
  }

  h2 {
    opacity: 0;
    transition: 1s opacity ease;
  }

  img {
    margin-bottom: 20px;

    transition: 1s width ease;
  }

  .pokemon__image {
    width: 60px;

    transition: width 0.5s ease;
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

  const focusedPokemon = (e, index) => {
    sliderRef.current.slickGoTo(index)
  }

  return (
    <StyledArchive className="archive">
      <Header />
      <Slider className="slider" ref={sliderRef} {...settings}>
        {pokemon.map((pokemon, i) => (
          <SinglePokemon
            key={pokemon.id}
            focusedPokemon={focusedPokemon}
            index={i}
            pokemon={pokemon}
          />
        ))}
      </Slider>
      <Credit />
    </StyledArchive>
  )
}

const SinglePokemon = ({ focusedPokemon, index, pokemon }) => (
  <StyledPokemonInfo className="pokemon">
    <Link onFocus={e => focusedPokemon(e, index)} to={`/${pokemon.slug}`}>
      <h2>{pokemon.name}</h2>
      <div className="pokemon__image">
        <Img
          alt={`Illustration of ${pokemon.name}`}
          fluid={pokemon.gatsbyImage.childImageSharp.fluid}
          placeholderStyle={{ visibility: "hidden" }}
        />
      </div>
    </Link>
  </StyledPokemonInfo>
)

export default Archive
