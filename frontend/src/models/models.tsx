export interface TaskCreateForm {
    title: string,
    description: string
}

export interface TaskUpdatedForm {
    done: boolean
}

export interface ErrorForm { 
    error: boolean, 
    message: string
}

export interface Task {
    id: string,
    title: string,
    description: string,
    done: boolean,
    createdDate: string,
    updatedDate: string | null
}