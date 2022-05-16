import "@testing-library/react"
import { render, screen } from "@testing-library/react";
import TaskList, { Task } from "components/TaskList"

it("Verifica se Tasklist é renderizado ", () => {
    const fakeTaskList: Task[] = [{id: "123", title: "title", description: "description", done: false, createdDate: "01/04/2020", updatedDate: "null"}];

    render(
        <TaskList taskList={fakeTaskList} updateTask={() => {}} deleteTask={() => {}}  />
    )

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
})