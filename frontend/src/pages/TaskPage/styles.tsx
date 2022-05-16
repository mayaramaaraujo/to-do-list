import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    margin: 0 8rem 0 8rem;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (max-width: 1056px) {
        justify-content: center;
        margin: 0 2rem 0 2rem;
        row-gap: 4rem;
        column-gap: 4rem;
    }
`