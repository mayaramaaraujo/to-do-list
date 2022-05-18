package com.project.todo.services;

import com.project.todo.exceptions.TaskNotFoundException;
import com.project.todo.models.Task;
import com.project.todo.repositories.TaskRepository;
import com.project.todo.utils.DateFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    public void add(Task task) {
        taskRepository.save(task);
    }

    public List<Task> getAll() {
        return taskRepository.findByOrderByCreatedDateDesc();
    }

    public Task update(String id, Task updatedTask) {
        Task task = taskExists(UUID.fromString(id));

        if(updatedTask.getTitle() != null) {
            task.setTitle(updatedTask.getTitle());
        }

        task.setUpdatedDate(DateFormat.dateFormat(LocalDateTime.now()));
        task.setDone(updatedTask.isDone());
        taskRepository.save(task);

        return task;
    }

    public void delete(String id) {
        Task task = taskExists(UUID.fromString(id));
        taskRepository.delete(task);
    }

    public Task taskExists(UUID id) {
        Optional<Task> task = taskRepository.findById(id);

        if(!task.isPresent()) {
            throw new TaskNotFoundException("Tarefa inexistente");
        }

        return task.get();
    }
}
