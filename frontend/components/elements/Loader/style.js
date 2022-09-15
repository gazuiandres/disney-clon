import styled from "styled-components";

export const LoaderContainer = styled.div `
    position: fixed;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    /* transform: translateY(-50%); */
    display:flex;
    place-content: center;
    width: 100%;
    height: 100%;
`

export const LoaderComponent = styled.span`
  color: #fff;
  position: relative;
  font-size: 11px;
  background: #fff;
  animation: escaleY 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  animation-delay: -0.16s;

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 2em;
    background: #fff;
    width: 1em;
    height: 4em;
    animation: escaleY 1s infinite ease-in-out;
  }



  ::before {
    left: -2em;
    animation-delay: -0.32s;
    }

  @keyframes escaleY {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;
