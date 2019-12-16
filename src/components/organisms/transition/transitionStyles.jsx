import styled from "styled-components"

const StyledTransition = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  overflow: hidden;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  animation: hideTransition 0s normal forwards ease-in-out;
  animation-delay: 3.4s;

  > div {
    background-color: white;
    transform: translateX(-100%);

    animation-name: transitionAnimation;
    animation-duration: 3s;

    &:nth-of-type(2n) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(3n) {
      animation-delay: 0.4s;
    }
  }

  .transition__content {
    display: flex;
    align-items: center;
    justify-content: center;

    color: black;

    div {
      overflow: hidden;

      span {
        display: inline-block;
        animation: titleFade 0.5s normal forwards ease-in-out;
        animation-delay: 0.6s;
        opacity: 0;
        transform: translateY(100%);

        text-transform: uppercase;
        font-weight: 700;
        font-size: 48px;
      }
    }
  }

  @keyframes transitionAnimation {
    0% {
      transform: translateX(100%);
    }
    20% {
      transform: translateX(0%);
    }
    80% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes hideTransition {
    0% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 0%;
      height: 0%;
    }
  }

  @keyframes titleFade {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

export default StyledTransition
