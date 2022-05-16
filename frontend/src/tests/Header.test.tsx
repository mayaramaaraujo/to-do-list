import {render, screen} from '@testing-library/react';
import Header from 'components/Header';

it("verifica se Header é renderizado", () => {

    render(
        <Header />
    )

    const header = screen.getByText("TASKLIST");

    expect(header).toBeVisible();
})

it("verifica se Checker no Header é renderizado", () => {

    render(
        <Header />
    )

    const checkerIcon = screen.getByAltText("checker");

    expect(checkerIcon).toBeVisible();
})

it("verifica altura do Header", () => {

    render(
        <Header />
    )

    const header = screen.getByTestId("header");

    expect(header).toHaveStyle({height: "4rem"});
})

