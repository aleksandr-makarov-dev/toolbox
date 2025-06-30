package com.example.toolbox.features.workspace.dto;

import com.example.toolbox.features.workspace.model.ProjectStatus;

import java.time.LocalDateTime;

public record ProjectSummaryResponse(
        Long id,
        String title,
        ProjectStatus status,
        LocalDateTime createdAt
) {
}
