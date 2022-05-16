import styled from 'styled-components';

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30%;
    min-width: 18rem;
    height: 12rem;

    border: 2px solid #4fc3f7;

    @media only screen and (max-width: 970px) {
        width: 100%;
    }
`

export const Title = styled.h2 `
    font-size: 24px;
    margin: 0;
    font-weight: normal;
    color: #5c5c5c;
`