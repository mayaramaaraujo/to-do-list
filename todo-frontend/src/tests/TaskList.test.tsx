import { render, screen } from "@testing-library/react";
import { TaskList } from "../components/TaskList";
import { Task } from "../models/Task";

describe("Comportamento da lista de tarefas", () => {
    test("", () => {
        const taskList:Task[] = [];
        const fn = jest.fn();

        render(<TaskList tasklist={taskList} loadTasks={fn}/>)
        
        const noTaskParagraph = screen.getByTestId("no-task");
        expect(noTaskParagraph).toBeInTheDocument();
    })
})