import { FormEvent } from "react";
import * as TC from "./styles"
import check from '../../assets/check.svg'
import deleteIcon from '../../assets/delete.svg'
import { Task, TaskUpdatedForm } from "models/models";

interface TaskCardProps {
    task: Task,
    updateTask: (id: string, body: TaskUpdatedForm) => void,
    deleteTask: (id: string) => void
}

function TaskCard({task, updateTask, deleteTask, ...props}: TaskCardProps) {

    function handleCheckedChange(e: FormEvent, id: string, taskDone: boolean) {
        e.preventDefault();

        const body: TaskUpdatedForm = {
            done: !taskDone
        }

        updateTask(id, body);
    }

    function handleDelete(e: FormEvent, id: string) {
        e.preventDefault();
        deleteTask(id);
    }
    
    return  <TC.Form key={task.id}>
                <TC.Header>
                    <TC.Title>{task.title.length > 16 ? task.title.substring(0,16) + "..." : task.title}</TC.Title>
                    <TC.Checker onClick={(e) => handleCheckedChange(e, task.id, task.done)} data-testid="checker">
                        {task.done ? <TC.CheckImage checked={task.done}  src={check} alt="checker" /> : null}
                    </TC.Checker>
                </TC.Header>               
                <TC.Description>{task.description} </TC.Description>              
                <TC.UpdateDescription>
                    Atualizado em: {task.updatedDate ? task.updatedDate : task.createdDate}
                </TC.UpdateDescription>
                <TC.ButtonDelete onClick={(e) => handleDelete(e, task.id)} data-testid="delete-button">
                    <TC.ButtonDeleteIcon src={deleteIcon} alt="" />
                </TC.ButtonDelete>
            </TC.Form >
}

export default TaskCard;