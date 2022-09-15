import styled from 'styled-components'

export const Nav = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;
    height: 4.5rem; 
    background-color: #090b13;
    padding: 0 1.875rem;
    z-index: 100;
`

export const LogoContainer = styled.picture`
    margin-right: 30px;
    padding: 2px 0 0 5px;
    cursor: pointer;
`

export const ListContainer = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding: 10px 0;
`

export const ListElement = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0.875rem 0;
    cursor: pointer;

    span {
        margin-right: 15px;
        padding-top: 2px;
    }
    :hover a::before {
        width: 100%;
        opacity: 1;
    }
    

    a{
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 1.70px;
        
        ::before {
            position: absolute;
            bottom: -5px;
            content: '';
            width: 0%;
            height: 2px;
            background-color: #f9f9f9;
            opacity: 0;
            transition: all .18s;
        }

        @media (max-width: 766px) {
            display: none;
        }
    }
`