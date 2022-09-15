import styled from 'styled-components'


export const FormContainer = styled.form`
position: fixed;
top: 4.5rem;
left: 0;
width: 100vw;
background-color: red;
z-index: 100;
`

export const SearchInput = styled.input`
    position: relative;
    width: 100%;
    height: 60px;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    background: rgb(75, 78, 90);
    color: rgb(168, 169, 173);
    padding-left: calc(3.5vw + 24px);
    font-size: 2rem;
    font-weight: 500;
    transition: all .3s;

    :focus {
        background: rgb(98, 102, 118);
        color: rgb(249, 249, 249);
    }

    ::placeholder {
        transition: all .3s;
    }

    :focus ::placeholder {
        color: rgb(249, 249, 249);
    }

    @media (min-width: 900px) {
        padding: .7rem 0 .7rem calc(3.5vw + 24px);
        font-size: 3rem;
        height: 70px;
    }
`