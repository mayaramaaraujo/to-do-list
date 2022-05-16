import styled from 'styled-components';

export const Checker = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    
    height: 1.5rem;
    width: 1.5rem;    

    border: 2px solid #0093c4;

    :hover {
        border: 2px solid #4fc3f7;
    }
`

export const CheckImage = styled.img<{checked: boolean}> `
    height: 100%;
    width: 100%;
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 12rem;
    height: auto;

    border-radius: 1rem;
    background-color: #0093c411;
    padding: 1rem;
   
    box-shadow: 0 1px 5px #e1f4ff;

    :hover {
        box-shadow: 0 1px 5px #979797;
    }
`

export const Header = styled.div `
    display: flex;
    align-items:center;    
`

export const Title = styled.h4 `
    color: #0093c4;
    margin: 0;
    width: 90%;
    font-size: 14px;
`

export const Description = styled.p `
    color: #292929;
    word-wrap: break-word;
`

export const UpdateDescription = styled.span `
    font-size: 12px;
    color: #5e5e5e;
`

export const ButtonDelete = styled.button `
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #ffffff;
    margin: 3px;
    border-radius: 3px;
    cursor: pointer;

    :hover {
        box-shadow: 0 1px 5px #979797;
    }
`

export const ButtonDeleteIcon = styled.img `
    width: 100%;
    height: 100%;
`
