import React from "react"

import "normalize.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../assets/styles/style.css"

import useAllPokemonQuery from "../components/hooks/useAllPokemonQuery"

import Archive from "../components/organisms/archive/archive"

export default props => {
  const pokemon = useAllPokemonQuery()

  return <Archive pokemon={pokemon} />
}
