package com.project.todo.repositories;

import com.project.todo.models.Task;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")
public class TaskRepositoryTest {

  @Autowired
  TaskRepository taskRepository;

  @BeforeEach
  public void setup() {

  }

  @Test
  public void thenReturnAnEmptyList() {
    List<Task> emptyList = taskRepository.findByOrderByCreatedDateDesc();
    assertEquals(emptyList.size(), 0);
  }

  @Test
  public void thenReturnNotEmptyList() {
    Task task = new Task("title", false);
    taskRepository.save(task);
    List<Task> emptyList = taskRepository.findByOrderByCreatedDateDesc();
    assertEquals(emptyList.size(), 1);
  }

  @Test
  public void thenReturnListOrderedByCreatedDate() {
    Task task1 = new Task("title", false);
    Task task2 = new Task("title", false);

    task1.setCreatedDate(LocalDateTime.of(2022,01,12,16,30,53).toString());
    task2.setCreatedDate(LocalDateTime.of(2022,02,12,16,30,53).toString());

    taskRepository.save(task1);
    taskRepository.save(task2);

    List<Task> emptyList = taskRepository.findByOrderByCreatedDateDesc();
    assertEquals(emptyList.stream().findFirst().get(), task2);
  }

}
