import { TaskCreateForm } from "pages/TaskPage";

import * as TF from './styles';
import * as G from "../GlobalStyles/GlobalStyles"
import { useContext } from "react";
import { ErrorContext } from "contexts/ErrorContext";
import { SuccessContext } from "contexts/SuccessContext";

export interface TaskFormProps {
    addTask: Function
    form: TaskCreateForm
    setForm: Function
}

function TaskForm({addTask, form, setForm, ...props}: TaskFormProps) {

    const errorContext = useContext(ErrorContext);
    const successContext = useContext(SuccessContext);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        addTask(form);
    }
    
    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
    }

    return <TF.FormContainer onSubmit={handleSubmit}>

        <TF.Title>O que temos para hoje?</TF.Title>

        <G.Input 
            variant="form"
            type="text" 
            placeholder="Título" 
            name="title" 
            value={form.title} 
            onChange={handleInputChange}
            onFocus={() => errorContext?.setHandleError({error:false, message: ""})}
        />
        <G.Input  
            variant="form"
            type="text" 
            placeholder="Descrição" 
            name="description" 
            value={form.description} 
            onChange={handleInputChange}
        />
        <G.Button type="submit">Adicionar tarefa</G.Button>
        <span>{errorContext?.handleError.error ? errorContext?.handleError.message : null}</span>
        <span>{successContext?.handleSuccess.success ? successContext?.handleSuccess.message : null}</span>
    </TF.FormContainer>
}

export default TaskForm;