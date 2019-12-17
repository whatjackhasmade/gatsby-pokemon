import styled from "styled-components"

const StyledCredit = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  opacity: 0.2;
  transition: 0.2s all ease;

  &:active,
  &:focus-within,
  &:hover {
    opacity: 1;
  }
`

export default StyledCredit
