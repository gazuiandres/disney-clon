import styled from 'styled-components'

export const Main = styled.div`
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