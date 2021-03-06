package com.project.todo.controllers;

import com.project.todo.models.Task;
import com.project.todo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    TaskService taskService;

    @PostMapping
    public ResponseEntity<?> add(@RequestBody @Valid Task task) {
        taskService.add(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(task);
    }

    @GetMapping
    public ResponseEntity<?> getAll() {
        List<Task> taskList = taskService.getAll();
        return ResponseEntity.ok(taskList);
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<?> update(@PathVariable(value = "taskId") String id, @RequestBody Task updatedTask) {
        Task task = taskService.update(id, updatedTask);
        return ResponseEntity.ok(task);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<?> delete(@PathVariable(value = "taskId") String id) {
        taskService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
