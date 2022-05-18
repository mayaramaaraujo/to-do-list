import { Task } from "../../models/Task"
import { deleteTask, markAsDone } from "../../services/TaskServices"
import "./index.scss"
import DeleteIcon from "../assets/delete.svg"
import DeleteCloseIcon from "../assets/delete-close.svg"

interface TaskListProps {
  tasklist: Task[]
  loadTasks: () => void
}

export const TaskList = (props: TaskListProps) => {

  return <>
    {props.tasklist?.map((t) =>
      <div className="task" key={t.id}>
        <button 
          className={t.done ? "task_checked" : "task_unchecked"} 
          onClick={() => markAsDone(t.done, props.loadTasks, t.id)} 
        />
        <p className={t.done ? "task_checked-title" : "task_unchecked-title"} >{t.title}</p>
        <button
          onClick={() => deleteTask(props.loadTasks, t.id)} 
          className="task_delete-button ">
            <img className="task_delete_icon" src={DeleteIcon} alt="" />
        </button> 
      </div>
    )}
  </>
}