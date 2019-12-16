import React from "react"

import "normalize.css"
import style from "../assets/styles/style.css"

import useAllPokemonQuery from "../components/hooks/useAllPokemonQuery"

import Archive from "../components/organisms/archive/archive"

export default props => {
  const pokemon = useAllPokemonQuery()

  return <Archive pokemon={pokemon} />
}
