package com.project.todo.exceptions;

public class TaskNotFoundException extends BusinessException{
    public TaskNotFoundException(String message) {
        super(message);
    }
}
