import axios from "axios";
import { ErrorContext } from "contexts/ErrorContext";
import { SuccessContext } from "contexts/SuccessContext";
import { TaskCreateForm, TaskUpdatedForm } from "models/models";
import { useEffect, useState } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { BASE_URL } from "../../constants/constants";

import * as TP from "./styles"



function TaskPage() {

    const [taskList, setTaskList] = useState([]);    
    const [handleError, setHandleError] = useState({error: false, message: ''});    
    const [handleSuccess, setHandleSuccess] = useState({success: false, message: ''});    

    const [form, setForm] = useState({
        title: '',
        description: ''
    });

    const addTask = (form: TaskCreateForm) => {
        axios.post(`${BASE_URL}/task`, form).then((res) => {
            getAllTasks();

            setForm({
                title: '',
                description: ''
            })

            setHandleError({
                error: false, 
                message: ''
            })

            setHandleSuccess({
                success: true, 
                message: 'Tarefa adicionada com sucesso!'
            })

            setInterval(() =>{
                setHandleSuccess({
                    success: false, 
                    message: ''
                })
            }, 3000)

        }).catch((err) => {
            setHandleError({
                error: true, 
                message: err?.response?.data?.reason
            })
        })
    }

    const deleteTask = (id: string) => {
        axios.delete(`${BASE_URL}/task/${id}`)
        .then((res) => {
            getAllTasks();

            setHandleError({
                error: false, 
                message: ''
            })
        }).catch((err) => {
            setHandleError({
                error: true, 
                message: err?.response?.data?.reason
            })
        })
    }

    const updateTask = (id: string, form: TaskUpdatedForm) => {
        axios.put(`${BASE_URL}/task/${id}`, form)
        .then((res) => {
            getAllTasks();

            setHandleError({
                error: false, 
                message: ''
            })
        }).catch((err) => {
            setHandleError({
                error: true, 
                message: err?.response?.data?.reason
            })
        })
    }

    const getAllTasks = async () => {
        await axios.get(`${BASE_URL}/task`)
        .then((res) => {
            setTaskList(res.data)
            
            setHandleError({
                error: false, 
                message: ''
            })
        }).catch((err) => {
            setHandleError({
                error: true, 
                message: err?.response?.data?.reason
            })
        })
    }    

    useEffect(() => {
       getAllTasks()
    }, [])

    useEffect(() => {

    }, [taskList])


    return (
        <SuccessContext.Provider value={{handleSuccess, setHandleSuccess}}>
            <ErrorContext.Provider value={{handleError, setHandleError}}>
                <TP.Container>
                    <TaskForm addTask={addTask} form={form} setForm={setForm} />
                    <TaskList 
                        taskList={taskList} 
                        updateTask={updateTask} 
                        deleteTask={deleteTask} 
                    />
                </TP.Container>
            </ErrorContext.Provider>
        </SuccessContext.Provider>
        
    ) 
}

export default TaskPage;
