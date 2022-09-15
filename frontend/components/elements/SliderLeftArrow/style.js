import styled from 'styled-components'


export const Button = styled.button`
    position: absolute;
    top: 50%;
    left: -50px;
    width: 26.5px;
    transform: translateY(-50%);
    z-index: 99;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: opacity .2s;
    opacity: ${props => props.opacity ? 1 : 0 };

    :hover {
        opacity: 1;
    }

    img {
        max-width: 100%;
        height: 100%;
    }
`