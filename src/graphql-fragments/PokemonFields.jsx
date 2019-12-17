import { graphql } from "gatsby"
export const PokemonFragment = graphql`
  fragment PokemonFragment on POKE_Pokemon {
    id
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    classification
    evolutionRequirements {
      amount
      name
    }
    fleeRate
    gatsbyImage {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    height {
      minimum
      maximum
    }
    image
    maxCP
    maxHP
    name
    number
    resistant
    slug
    types
    weaknesses
    weight {
      minimum
      maximum
    }
  }
`
