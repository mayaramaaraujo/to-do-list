import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from "react";
import { Task } from "../TaskList";
import * as TC from "./styles"
import check from '../../assets/check.svg'
import deleteIcon from '../../assets/delete.svg'

interface TaskCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    task: Task,
    updateTask: Function,
    deleteTask: Function
}

function TaskCard({task, updateTask, deleteTask, ...props}: TaskCardProps) {


    function handleCheckedChange(e: FormEvent<HTMLDivElement>, id: string, taskDone: boolean) {
        e.preventDefault();

        const body = {
            done: !taskDone
        }

        updateTask(id, body);
    }

    function handleDelete(e: FormEvent<HTMLButtonElement>, id: string) {
        e.preventDefault();
        deleteTask(id);
    }
    
    return  <TC.Form key={task.id}>
                <TC.Header>
                    <TC.Title>{task.title.length > 16 ? task.title.substring(0,16) + "..." : task.title}</TC.Title>
                    <TC.Checker onClick={(e) => handleCheckedChange(e, task.id, task.done)}>
                        {task.done ? <TC.CheckImage checked={task.done}  src={check} alt="checker" /> : null}
                    </TC.Checker>
                </TC.Header>               
                <TC.Description>{task.description} </TC.Description>              
                <TC.UpdateDescription>
                    Atualizado em: {task.updatedDate ? task.updatedDate : task.createdDate}
                </TC.UpdateDescription>
                <TC.ButtonDelete onClick={(e) => handleDelete(e, task.id)}>
                    <TC.ButtonDeleteIcon src={deleteIcon} alt="" />
                </TC.ButtonDelete>
            </TC.Form >
}

export default TaskCard;