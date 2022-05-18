package com.project.todo.models;

import com.project.todo.utils.DateFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;

    @NotBlank(message = "Titulo não pode estar vazio.")
    private String title;

    @NotNull
    private boolean done;

    private String createdDate = DateFormat.dateFormat(LocalDateTime.now());
    private String updatedDate;

    public Task(String title, boolean done) {
        this.title = title;
        this.done = done;
    }
}
