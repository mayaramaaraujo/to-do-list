import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants";
import { Task } from "../models/Task";

export interface LoadTasksReturn {
    tasklist: Task[],
    loadTasks: () => void
}

export const useLoadTasks = () : LoadTasksReturn => {
    const [tasklist, setTaskList] = useState<Task[]>([]);

    const loadTasks = () => {
        axios.get(`${BASE_URL}`).then(res => {
            setTaskList(res.data);
        }).catch(err => console.log(err))
    }   

    useEffect(() => {
        loadTasks();
    }, [])    

    return {tasklist, loadTasks};
}