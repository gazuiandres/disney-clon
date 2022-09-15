import styled from 'styled-components'

export const Main = styled.main`
    position: relative;
    min-height: calc(100vh + 70px);

    ::before {
        background: url("/images/homeBackground.png") center center / cover no-repeat;
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
`


export const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    opacity: ${props => props.opacityBg};
    transition: opacity 200ms ease 0s ;

    div {
      position: relative;
      background-image: url(${props => props.background});
      background-size: cover;
      width: 100%;
      height: 100%;
    
      ::after {
          content: '' ;
          position: absolute ;
          inset: 0;
          background-image:  radial-gradient(farthest-side at 74% 50%,transparent,rgb(26,29,39));
      }
    }
`