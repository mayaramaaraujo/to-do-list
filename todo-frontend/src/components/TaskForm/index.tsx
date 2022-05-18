import { NewTaskForm } from "../../models/Task";
import { saveTask } from "../../services/TaskServices";
import "./index.scss"

interface TaskFormProps {
    clearForm: () => void;
    newTask: NewTaskForm;
    loadTasks: () => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const TaskFormComponent = (props: TaskFormProps) => {
    return <form className="task-form" onSubmit={(e) => saveTask(e, props.clearForm, props.newTask, props.loadTasks)}>
        <input
            className="task-form_input"
            type="text"
            name="title"
            value={props.newTask.title}
            onChange={props.handleInputChange} />
        <button className="task-form_button" type="submit">enviar</button>
    </form>
}