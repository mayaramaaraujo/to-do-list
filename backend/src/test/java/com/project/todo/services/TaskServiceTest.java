package com.project.todo.services;

import com.project.todo.exceptions.TaskNotFoundException;
import com.project.todo.models.Task;
import com.project.todo.repositories.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@SpringBootTest
public class TaskServiceTest {

  Task task;

  List<Task> taskArrayList = new ArrayList<>();

  UUID invalidUUID = UUID.randomUUID();

  @MockBean
  TaskRepository taskRepository;

  @Autowired
  TaskService taskService;

  @BeforeEach
  public void setup() {
    task = new Task("title", "description", false);
    task.setId(UUID.randomUUID());

    taskArrayList.add(task);

    when(taskRepository.findById(invalidUUID)).thenReturn(Optional.empty());
    when(taskRepository.findById(task.getId())).thenReturn(Optional.of(task));
    when(taskRepository.findByOrderByCreatedDateDesc()).thenReturn(taskArrayList);
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

  @Test
  public void thenReturnVoidIfTaskIsDeleted() {
    assertDoesNotThrow(() -> taskService.delete(task.getId().toString()));
  }

  @Test
  public void thenReturnVoidIfTaskIsUpdated() {
    task.setDone(true);
    assertDoesNotThrow(() -> taskService.update(task.getId().toString(), task));
    assertNotNull(task.getUpdatedDate());
  }

  @Test
  public void thenReturnListOfTasks() {
    List<Task> tasks = taskService.getAll();
    assertNotNull(tasks);
    assertEquals(tasks.size(), 1);
  }

}
