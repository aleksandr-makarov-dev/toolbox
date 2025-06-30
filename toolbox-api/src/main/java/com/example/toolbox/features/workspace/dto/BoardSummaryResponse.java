package com.example.toolbox.features.workspace.dto;

import com.example.toolbox.features.workspace.model.BoardStatus;

import java.time.LocalDateTime;

public record BoardSummaryResponse(
        Long id,
        String title,
        BoardStatus status
        ) {
}
