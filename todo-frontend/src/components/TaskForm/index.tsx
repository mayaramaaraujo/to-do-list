import React, { useRef } from "react";
import { NewTaskForm } from "../../models/Task";
import { saveTask } from "../../services/TaskServices";
import "./index.scss";

interface TaskFormProps {
  clearForm: () => void;
  newTask: NewTaskForm;
  loadTasks: () => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const TaskFormComponent = (props: TaskFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    saveTask(e, props.clearForm, props.newTask, props.loadTasks);
    inputRef.current?.focus();
  };

  return (
    <form data-testid="form" className="task-form" onSubmit={addTask}>
      <input
        ref={inputRef}
        className="task-form_input"
        type="text"
        placeholder="ex: Lavar roupas"
        name="title"
        value={props.newTask.title}
        onChange={props.handleInputChange}
      />
      <button
        className="task-form_button"
        type="submit"
        disabled={props.newTask.title.length === 0}
      >
        enviar
      </button>
    </form>
  );
};
