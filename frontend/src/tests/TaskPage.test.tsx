import "@testing-library/react"
import { render, screen } from "@testing-library/react";
import TaskPage from "pages/TaskPage";

it("Verifica se TaskPage é renderizado ", () => {

    render(
        <TaskPage />
    )

    expect(screen.getByText("O que temos para hoje?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Título")).toBeInTheDocument();

})

