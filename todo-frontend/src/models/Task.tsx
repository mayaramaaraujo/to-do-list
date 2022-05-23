export interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdDate: string;
  updatedDate: string | null;
}

export interface NewTaskForm {
  title: string;
}

export interface UpdatedTask {
  done: boolean;
}
