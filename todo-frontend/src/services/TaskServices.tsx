import axios from "axios";
import { FormEvent } from "react";
import { BASE_URL } from "../constants";
import { NewTaskForm, UpdatedTask } from "../models/Task";

export const saveTask = (
  e: FormEvent,
  clearForm: () => void,
  newTask: NewTaskForm,
  getTasks: () => void
) => {
  e.preventDefault();

  axios
    .post(`${BASE_URL}`, newTask)
    .then(() => {
      getTasks();
      clearForm();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const markAsDone = (
  isDone: boolean,
  getTasks: () => void,
  taskId: string
) => {
  const updatedTask: UpdatedTask = {
    done: !isDone,
  };

  axios
    .put(`${BASE_URL}/${taskId}`, updatedTask)
    .then(() => {
      getTasks();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTask = (getTasks: () => void, taskId: string) => {
  axios
    .delete(`${BASE_URL}/${taskId}`)
    .then(() => {
      getTasks();
    })
    .catch((err) => {
      console.log(err);
    });
};
