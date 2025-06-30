package com.example.toolbox.features.workspace.dto;

import com.example.toolbox.features.workspace.model.BoardStatus;

import java.util.List;

public record BoardDetailsResponse(
        Long id,
        String title,
        BoardStatus status,
        List<ListSummaryResponse> lists
) {
}
