package com.project.todo.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.todo.models.Task;
import com.project.todo.services.TaskService;
import org.hamcrest.core.Is;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.UUID;


@SpringBootTest
@AutoConfigureMockMvc
public class TaskListControllerTest {

  @Autowired
  MockMvc mockMvc;

  @Autowired
  ObjectMapper objectMapper;

  @MockBean
  TaskService taskService;

  public Task task;

  @BeforeEach
  public void setup() {
    task = new Task("title", "description", true);

    task.setId(UUID.randomUUID());
    task.setDone(false);

    when(taskService.update(task.getId().toString(), task)).thenReturn(task);
  }

  @Test
  public void thenReturnTaskList() throws Exception {
    mockMvc.perform(get("/task").contentType("application/json")).andExpect(status().isOk()).andReturn().getResponse();
  }

  @Test
  public void thenReturnCreatedIfPayloadIsValid() throws Exception {
    mockMvc.perform(post("/task")
            .contentType("application/json")
            .content(objectMapper.writeValueAsString(task)))
            .andExpect(status().isCreated());
  }

  @Test
  public void thenReturnOkIfPayloadIsValidWhenUpdate() throws Exception {

    mockMvc.perform(put("/task/{taskId}", "taskId", "1234")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(task)))
            .andExpect(status().isOk());
  }

  @Test
  public void thenReturnOkIfTaskIsDeleted() throws Exception {

    mockMvc.perform(delete("/task/{taskId}", "taskId", "1234")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(task)))
            .andExpect(status().isNoContent());
  }

  @Test
  public void thenReturnBadRequestIfPayloadIsNotValid() throws Exception {
    Task invalidTask = new Task();

    mockMvc.perform(post("/task")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(invalidTask)))
            .andExpect(status().isBadRequest()).andExpect(jsonPath("message", Is.is("Corpo inválido")));
  }
}
