import styled from "styled-components"

const StyledAttacks = styled.section`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);

  .attacks__group {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }
`

export default StyledAttacks
