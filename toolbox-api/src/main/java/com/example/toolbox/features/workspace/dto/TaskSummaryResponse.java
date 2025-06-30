package com.example.toolbox.features.workspace.dto;

import com.example.toolbox.features.workspace.model.TaskPriority;

import java.time.LocalDateTime;

public record TaskSummaryResponse(
        Long id,
        String title,
        TaskPriority priority,
        LocalDateTime dueDate
) {
}
