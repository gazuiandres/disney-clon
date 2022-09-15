import styled from 'styled-components'



export const DescriptionContainer = styled.article`
    
`


export const LogoContainer = styled.picture`
    display: block;
    position: relative;
    margin: 80px 0 1rem ;
    width: 341px;
    height: 191px;

    img {
        max-width: 341px;
        min-height: 100px;
    }

    @media (max-width: 700px) {
        width: 126px;
        height: 70px;
        img {
            max-width: 100%;
        }
    }
`


export const InformationContainer = styled.section`
    margin-bottom: 2rem;
    color: #f9f9f9;
    >div{
        display: flex;
        flex-direction: column;
        p {
            margin: .8rem 0 0;
        }
    }

    picture {
        margin: 0 1rem 0 0;
    }

    @media (min-width: 820px ){

        >div{
            flex-direction: row;
            align-items: center;

            p {
                margin: 0;
            }
        }

        p {
            position: relative;
            font-size: .8rem;
            bottom: px;
        }
    }
`

export const InformationImageContainer = styled.div`
    display: flex;

    img {
        width: 40px;
        height: 25px;
    }

    @media (min-width: 820px ){
        img {
            width: 30px;
            height: 20px;
        }
    }
`


export const PlayContainer = styled.section`
    display: flex;
    margin: 0 0 3rem;
`


export const Button = styled.button `
    position:relative ;
    height: 56px;
    margin: 0 .8rem;
    padding: 0 24px;
    justify-content: center;
    background-color: ${props => props.bgColor};
    border-radius: 0.25rem ;
    color: ${props => props.color ? props.color : 'black'} ;
    cursor: pointer;
    border: none ;
    transition: all .2s ease-in-out;

    :hover {
        background-color: ${props => props.hoverBg ? props.hoverBg : '' };
        color: #333;
        transition: all .2s ;
    }

    ::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color:  rgba(0, 0, 0, 0);
        transition: all .2s ease-in-out;
        border-radius: 0.25rem ;
        border: ${props => props.withBorder ? props.borderSize : '' } 
            ${props => props.withBorder ? props.borderColor : ''} ${props => props.withBorder ? props.typeBorder : 'none'};
    }

    :hover ::before {
        border: 1px ${props => props.withBorder ? 'solid' : 'none'} ${props => props.withBorder ? 'rgba(0, 0, 0, 0.4)' : ''};
        transition: all .2s ;
        background-color:  ${props => props.wrapper ? 'rgba(0, 0, 0, .4)' : 'rgba(0, 0, 0, 0)'};
    }

    :first-child {
        margin-left: 0;
    }
    
`

export const ButtonElementsContainer = styled.div`
    position: relative ;
    display: flex;
    align-items: center;
    

    img {
        width: 18px;
    }
`

export const ButtonText = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    margin: ${props => props.margin ? props.margin : 0} ;
    letter-spacing: 1.5px ;
`


export const TextContainer = styled.section`
    color: ${props => props.color ? props.color : '#f9f9f9'};
    font-weight: 400;
    font-size: 19px;
    line-height: 1.6;
    width: 71%;

    @media (max-width: 700px) {
        width: 100%;
        text-align: center;
        line-height: 1.7;
    }
`