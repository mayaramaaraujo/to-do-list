import "@testing-library/react"
import { fireEvent, render, screen } from "@testing-library/react";
import TaskList from "components/TaskList"
import { Task } from "models/models";

it("Verifica se Tasklist é renderizado ", () => {
    const fakeTaskList: Task[] = [{id: "123", title: "title", description: "description", done: false, createdDate: "01/04/2020", updatedDate: "null"}];

    render(
        <TaskList taskList={fakeTaskList} updateTask={() => {}} deleteTask={() => {}}  />
    )

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
})

test("Ao clicar no botão de deletar, o método de deletar deve ser chamado", () => {
    const fakeTaskList: Task[] = [{id: "123", title: "title", description: "description", done: false, createdDate: "01/04/2020", updatedDate: "null"}];

    const deleteTaskMock = jest.fn();

    render(
        <TaskList taskList={fakeTaskList} updateTask={() => {}} deleteTask={deleteTaskMock}  />
    )

    const button = screen.getByTestId("delete-button");
    fireEvent.click(button);

    expect(deleteTaskMock).toHaveBeenCalled();
})

test("Ao clicar no botão de checker, o método de update deve ser chamado", () => {
    const fakeTaskList: Task[] = [{id: "123", title: "title", description: "description", done: false, createdDate: "01/04/2020", updatedDate: "null"}];

    const updateTaskMock = jest.fn();

    render(
        <TaskList taskList={fakeTaskList} updateTask={updateTaskMock} deleteTask={() => {}}  />
    )

    const button = screen.getByTestId("checker");
    fireEvent.click(button);

    expect(updateTaskMock).toHaveBeenCalled();
})