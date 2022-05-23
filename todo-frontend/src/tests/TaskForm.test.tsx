import { fireEvent, render, screen } from "@testing-library/react";
import { TaskFormComponent } from "../components/TaskForm";

describe("Testes no formulário de adicionar tarefas", () => {
  test("quando input estiver vazio, não pode ser adicionadas novas tarefas", () => {
    const task = { title: "" };
    const fn = jest.fn();

    render(
      <TaskFormComponent
        newTask={task}
        clearForm={fn}
        handleInputChange={fn}
        loadTasks={fn}
      />
    );

    const input = screen.getByPlaceholderText("ex: Lavar roupas");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("quando input estiver preenchido, o botão de adicionar tarefa deve estar habilitado", () => {
    const task = { title: "tarefa preenchida" };
    const fn = jest.fn();

    render(
      <TaskFormComponent
        newTask={task}
        clearForm={fn}
        handleInputChange={fn}
        loadTasks={fn}
      />
    );

    const input = screen.getByPlaceholderText("ex: Lavar roupas");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test("O método handleInputChange deve ser chamado quando o usuário digitar alguma tarefa no Input", () => {
    const handleInputChange = jest.fn();
    const clearForm = jest.fn();
    const loadTask = jest.fn();

    render(
      <TaskFormComponent
        newTask={{ title: "" }}
        clearForm={clearForm}
        handleInputChange={handleInputChange}
        loadTasks={loadTask}
      />
    );
    const input = screen.getByPlaceholderText("ex: Lavar roupas");

    fireEvent.change(input, { target: { value: "tarefa preenchoda" } });
    expect(handleInputChange).toBeCalled();
  });

  test("Quando o usuário submeter o formulário, o input deve estar vazio", () => {
    const handleInputChange = jest.fn();
    const clearForm = jest.fn();
    const loadTask = jest.fn();

    render(
      <TaskFormComponent
        newTask={{ title: "" }}
        clearForm={clearForm}
        handleInputChange={handleInputChange}
        loadTasks={loadTask}
      />
    );

    const input = screen.getByPlaceholderText("ex: Lavar roupas");
    fireEvent.change(input, { target: { value: "tarefa preenchoda" } });

    const form = screen.getByTestId("form");
    fireEvent.submit(form);

    expect(input).toHaveValue("");
  });
});
