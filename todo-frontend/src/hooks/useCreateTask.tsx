import React, { useState } from "react";
import { NewTaskForm } from "../models/Task";

export interface TaskFormHookReturn {
  newTask: NewTaskForm;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  clearForm: () => void;
}

export const useCreateTask = (): TaskFormHookReturn => {
  const [newTask, setNewTask] = useState<NewTaskForm>({ title: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setNewTask({
      title: "",
    });
  };

  return { newTask, handleInputChange, clearForm };
};
