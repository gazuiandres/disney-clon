import styled from 'styled-components'


export const ItemContainer = styled.div`
    width: calc(20% - 20px);
    margin: 20px 0 0 20px;
    flex: 0 0 auto;
    height: auto;
    cursor: pointer;

    :hover video {
        opacity: 1;
    }
    
    @media (max-width: 760px) {
        width: calc(22% - 20px);
    }
`

export const WrapperContainer = styled.div`
    background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1);
    width: 100%;
    display: block;
    position: relative;
    transition: all .4s;


    ::after {
        position: absolute;
        content: '';
        border-radius: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 3px solid rgba(249, 249, 249, 0.1);

        @media (max-width: 760px) {
            border: 2px solid rgba(249, 249, 249, 0.1);
        }
    }

    :hover {
        transform: scale(1.07);
        ::after {
            border: 3px solid rgba(255, 255, 255, .6);
        }
    }
`

export const PictureContainer = styled.div `
    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
    border-radius: 10px;
    position: relative;
    padding-top: 56.25%;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        object-fit: cover;
        z-index: 1;
    }

    video {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: 10px;
    }
`