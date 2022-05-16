import { DetailedHTMLProps, HTMLAttributes } from "react";
import TaskCard from "../TaskCard";
import * as TL from './styles'

export interface Task {
    id: string,
    title: string,
    description: string,
    done: boolean,
    createdDate: string,
    updatedDate: string | null
}

export interface TaskListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    taskList: Task[],
    updateTask: Function
    deleteTask: Function
}

function TaskList({taskList, updateTask, deleteTask, ...props}: TaskListProps) {
    return <TL.TaskListContainer data-testid={"tasklist"}>
        {taskList.map((task) => {
            return <TaskCard key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        })}
    </TL.TaskListContainer>
}

export default TaskList;