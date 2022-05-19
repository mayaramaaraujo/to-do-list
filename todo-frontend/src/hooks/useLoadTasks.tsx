import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants";
import { Task } from "../models/Task";

export interface LoadTasksReturn {
    tasklist: Task[],
    loadTasks: () => void,
    loading: boolean
}

export const useLoadTasks = () : LoadTasksReturn => {
    const [tasklist, setTaskList] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    const loadTasks = (firstRender?: boolean) => {
        if(firstRender) {
            setLoading(true);
        }

        axios.get(`${BASE_URL}`).then(res => {
            setTaskList(res.data);
            setLoading(false);
        }).catch(err => console.log(err))
    }   

    useEffect(() => {
        loadTasks(true);
    }, [])    

    return {tasklist, loadTasks, loading};
}