import styled from 'styled-components'


export const CardContainer = styled.div`
    display: block;
    position: relative;
    margin: 0 0 1.5rem 0rem;
    flex: 0 0 calc(50% - 1.5rem);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transform: scale(1, 1) translateZ(0px);
    transition-duration: 300ms;
    
    :hover {
        transform: scale(1.06);
        ::after {
            border: solid 4px rgba(255, 255, 255, .8);
        }
    }

    ::after {
        content: '';
        position: absolute;
        inset: 0;
        border: solid 4px rgba(255, 255, 255, 0);
        border-radius: 4px;
        transition: all .5s ease;
    }

    :nth-child(odd){
        margin-right: 1.5rem;
    }

    a {
        z-index: 10;
    }

    @media (min-width: 768px) {
        margin-bottom: 2rem;
    }

    @media (min-width: 1150px) {
        flex: 0 0 calc(25% - 1.5rem);
        margin-right: 1.5rem;
    }
`

export const ImageContainer = styled.div `

    position: relative;
    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
    width: 100%;
    padding-top: 56.53%;
    border-radius: 4px;
    overflow: hidden;

    :hover {
        transform: scale(1,1);
    }
`