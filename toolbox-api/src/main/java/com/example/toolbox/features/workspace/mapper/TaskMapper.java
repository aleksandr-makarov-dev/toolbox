package com.example.toolbox.features.workspace.mapper;

import com.example.toolbox.features.workspace.dto.TaskCreateRequest;
import com.example.toolbox.features.workspace.dto.TaskSummaryResponse;
import com.example.toolbox.features.workspace.model.TaskEntity;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

    public TaskSummaryResponse toTaskSummaryResponse(TaskEntity task) {
        return new TaskSummaryResponse(
                task.getId(),
                task.getTitle(),
                task.getPriority(),
                task.getDueDate(),
                task.getList().getId()
        );
    }

    public TaskEntity toTaskEntity(TaskCreateRequest request) {
        return TaskEntity.builder()
                .title(request.title())
                .priority(request.priority())
                .dueDate(request.dueDate())
                .build();
    }
}
