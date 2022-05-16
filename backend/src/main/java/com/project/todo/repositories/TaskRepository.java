package com.project.todo.repositories;

import com.project.todo.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {
    public List<Task> findByOrderByCreatedDateDesc();
}
