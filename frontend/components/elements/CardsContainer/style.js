import styled from 'styled-components'


export const CardContainer = styled.section`
    display:none;
    place-content: center flex-start;
    justify-content: flex-start;
    flex-flow: nowrap;
    margin: 2rem 0 3rem;

    @media (min-width: 1000px) {
        display: flex;
    }
`