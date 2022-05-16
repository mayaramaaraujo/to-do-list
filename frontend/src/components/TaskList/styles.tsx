import styled from 'styled-components';

export const TaskListContainer = styled.div `
    width: 64%;
    min-width: 24rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.5rem;
    column-gap: 1.5rem;

    @media only screen and (max-width: 1056px) {
        justify-content: center;
    }
`