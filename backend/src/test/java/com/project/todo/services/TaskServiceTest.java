package com.project.todo.services;

import com.project.todo.exceptions.TaskNotFoundException;
import com.project.todo.models.Task;
import com.project.todo.repositories.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@SpringBootTest
public class TaskServiceTest {

  Task task;

  UUID invalidUUID = UUID.randomUUID();

  @MockBean
  TaskRepository taskRepository;

  @Autowired
  TaskService taskService;

  @BeforeEach
  public void setup() {
    task = new Task("title", "description", false);
    task.setId(UUID.randomUUID());

    when(taskRepository.findById(invalidUUID)).thenReturn(Optional.empty());
    when(taskRepository.findById(task.getId())).thenReturn(Optional.of(task));
  }

  @Test
  public void thenReturnNotNullIfTaskExists() {
     Task taskOptional = taskService.taskExists(task.getId());

     assertNotNull(taskOptional);
     assertEquals(taskOptional.getTitle(), "title");
  }

  @Test
  public void thenReturnTaskNotFoundExceptionIfTaskDoesNotExists() {
    assertThrows(TaskNotFoundException.class, () -> taskService.taskExists(invalidUUID));
  }

}
