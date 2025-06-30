package com.example.toolbox.features.workspace.mapper;

import com.example.toolbox.features.workspace.dto.BoardCreateRequest;
import com.example.toolbox.features.workspace.dto.BoardDetailsResponse;
import com.example.toolbox.features.workspace.dto.BoardSummaryResponse;
import com.example.toolbox.features.workspace.model.BoardEntity;
import com.example.toolbox.features.workspace.model.BoardStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BoardMapper {

    private final ListMapper listMapper;

    public BoardEntity toBoardEntity(BoardCreateRequest request) {
        return BoardEntity.builder()
                .title(request.title())
                .status(BoardStatus.DRAFT)
                .build();
    }

    public BoardSummaryResponse toProjectSummaryResponse(BoardEntity board) {
        return new BoardSummaryResponse(
                board.getId(),
                board.getTitle(),
                board.getStatus()
        );
    }

    public BoardDetailsResponse toBoardDetailsResponse(BoardEntity board) {
        return new BoardDetailsResponse(
                board.getId(),
                board.getTitle(),
                board.getStatus(),
                board.getLists()
                        .stream()
                        .map(listMapper::toListSummaryResponse)
                        .toList()
        );
    }
}
