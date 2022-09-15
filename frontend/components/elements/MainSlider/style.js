import styled from 'styled-components'
import Slider from "react-slick";


export const Main = styled(Slider)`
    margin-top: 4rem;
    .slick-list {
        overflow: visible;

        div {
            outline: none;
        }
    }

    .slick-slide > div {  
        margin: 0 15px;
        background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
    }

    .slick-slide.slick-active {
        > div {
            > div {   
                ::before {
                    background-color: rgba(0, 0, 0, 0);
                }
            }
        }
    }

    .slick-dots {
        position: absolute;
        bottom: 10px;
        right: 40px;
        display: flex;
        justify-content: flex-end;

        li {
            margin-right: 0;
        }

        li.slick-active {
            button::before {
                color: #f9f9f9;
                opacity: 1;
            }
        }
    }

    .slick-dots button {
       ::before {
           font-size:10px;
           opacity: 1;
           color: rgb(150, 158, 171);
       }
    }

    @media (max-width: 700px) {
        .slick-slide > div {
            margin: 0 10px;
        }
    }

`

export const Wrap = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    cursor: pointer;

    ::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 10;
    }
    
    ::after {
                border-radius: 4px;
                border: 4px solid rgba(255, 255, 255, 0);
                inset: 0px;
                content: "";
                position: absolute;
                transition: border .3s ;
    }

    :hover ::after {
        border: 4px solid rgba(255, 255, 255, .5);
    }

    @media (max-width: 800px) {
        height: 130px;
    }

    img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-radius: 4px;
        transition: border .5s;
    }
`

export const ImageTextWrapper = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
        max-width: 100%;
    }

`