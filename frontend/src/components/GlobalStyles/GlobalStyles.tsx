import styled from 'styled-components'
import check from '../../assets/check.svg'

const COLORS = {
    primary: "#4fc3f7",
    light: "#8bf6ff",
    dark: "#0093c4",
    view: {
        color: "#141414",
        font: "bold",
    },
    form: {
        color: "#5c5c5c",
        font: "light"
    },    
    bg: "#cfcfcf"
}

export const Input = styled.input<{variant: "form" | "view" }> `
    outline: none;

    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid ${COLORS.dark};

    width: 16rem;
    height: 2.4rem;
    margin: 0.2rem;

    color: ${props => COLORS[props.variant].color};
    font-weight: ${props => COLORS[props.variant].font};

    :focus, :hover {
        outline: none;
        border-bottom: 2px solid ${COLORS.primary};
        transition: 0.2s;
    }

    ::placeholder {
        color: ${props => COLORS[props.variant].color};
        font-weight: ${props => COLORS[props.variant].font};
    }
`
export const Button = styled.button `
    border: none;
    border-radius: 0.2rem;

    background-color: ${COLORS.dark};
    height: 2rem;
    width: 10rem;
    font-weight: bold;
    color: ${COLORS.view.color};

    margin-top: 0.6rem;

    box-shadow: 0 1px 5px #b6b6b6;

    :hover {
        background-color: ${COLORS.primary};
        transition: 0.2s;
        cursor: pointer;
    }
`
