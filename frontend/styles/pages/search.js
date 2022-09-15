import styled from 'styled-components'

export const SearchResultContainer = styled.section`
    padding: ${props=> props.padding ? props.padding : '8rem 0 0'};
    color: #f9f9f9;

    h5 {
        font-size: 1rem;
    }

    >div {
        display: flex;
        flex-wrap: wrap;
    }

    @media (min-width: 768px) {
        h5{
            font-size: 1.5rem;
            margin-bottom: 1.8rem;
        }
    }
`