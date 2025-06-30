package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.BoardCreateRequest;
import com.example.toolbox.features.workspace.dto.BoardDetailsResponse;
import com.example.toolbox.features.workspace.dto.BoardSummaryResponse;
import com.example.toolbox.features.workspace.model.BoardEntity;

import java.util.List;

public interface BoardService {

    BoardSummaryResponse createProject(BoardCreateRequest request);

    List<BoardSummaryResponse> getAllProjects();

    BoardDetailsResponse getBoardById(Long id);

    BoardEntity getBoardByIdOrThrow(Long id);
}
