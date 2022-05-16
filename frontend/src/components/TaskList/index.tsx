import { Task, TaskUpdatedForm } from "models/models";
import TaskCard from "../TaskCard";
import * as TL from './styles'

export interface TaskListProps {
    taskList: Task[],
    updateTask: (id: string, body: TaskUpdatedForm) => void,
    deleteTask: (id: string) => void
}

function TaskList({taskList, updateTask, deleteTask, ...props}: TaskListProps) {
    return <TL.TaskListContainer data-testid={"tasklist"}>
        {taskList.map((task) => {
            return <TaskCard key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        })}
    </TL.TaskListContainer>
}

export default TaskList;