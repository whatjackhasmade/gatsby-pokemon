import styled from "styled-components"

const accessibleColour = background => {
  let textColour = "#131313"

  if (!background) return textColour

  const colour =
    background.charAt(0) === "#" ? background.substring(1, 7) : background
  const r = parseInt(colour.substring(0, 2), 16) // hexToR
  const g = parseInt(colour.substring(2, 4), 16) // hexToG
  const b = parseInt(colour.substring(4, 6), 16) // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#131313" : "#fff"
}

const typeColour = props => {
  let colour = "#6c6c4d"
  const { type } = props
  if (!type) return colour

  switch (type.toLowerCase()) {
    case "normal":
      colour = "#6c6c4d"
      break
    case "fighting":
      colour = "#aa312b"
      break
    case "fire":
      colour = "#cd6d27"
      break
    case "water":
      colour = "#0f358e"
      break
    case "flying":
      colour = "#1c0467"
      break
    case "grass":
      colour = "#67a44a"
      break
    case "poison":
      colour = "#699454"
      break
    case "electric":
      colour = "#eecb3c"
      break
    case "ground":
      colour = "#9d8337"
      break
    case "psychic":
      colour = "#9c0232"
      break
    case "rock":
      colour = "#b4a252"
      break
    case "ice":
      colour = "#326a6a"
      break
    case "bug":
      colour = "#d4e258"
      break
    case "dragon":
      colour = "#2f00ab"
      break
    case "ghost":
      colour = "#55456f"
      break
    case "dark":
      colour = "#715c4e"
      break
    case "steel":
      colour = "#B8B8D0"
      break
    case "fairy":
      colour = "#EE99AC"
      break
    default:
      colour = "#6c6c4d"
      break
  }

  return colour
}

const StyledBadge = styled.span`
  display: inline-block;
  border-radius: 100px;
  padding: 4px 10px;

  background-color: ${props => typeColour(props)};
  color: ${props => accessibleColour(typeColour(props))};

  & + .badge {
    margin-left: 4px;
  }
`

export default StyledBadge
