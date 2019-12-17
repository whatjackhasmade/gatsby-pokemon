import styled from "styled-components"

const StyledHeader = styled.header`
  display: block;
  margin-bottom: auto;

  opacity: 0.2;
  transition: 0.2s all ease;

  &:active,
  &:focus-within,
  &:hover {
    opacity: 1;
  }
`

export default StyledHeader
