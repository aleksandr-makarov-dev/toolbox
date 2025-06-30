package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.BoardCreateRequest;
import com.example.toolbox.features.workspace.dto.BoardDetailsResponse;
import com.example.toolbox.features.workspace.dto.BoardSummaryResponse;
import com.example.toolbox.features.workspace.mapper.BoardMapper;
import com.example.toolbox.features.workspace.model.BoardEntity;
import com.example.toolbox.features.workspace.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JpaBoardService implements BoardService {

    private final BoardRepository boardRepository;
    private final BoardMapper boardMapper;

    @Transactional
    @Override
    public BoardSummaryResponse createProject(BoardCreateRequest request) {
        BoardEntity board = boardMapper.toBoardEntity(request);
        return boardMapper.toProjectSummaryResponse(boardRepository.save(board));
    }

    @Transactional(readOnly = true)
    @Override
    public List<BoardSummaryResponse> getAllProjects() {
        return boardRepository.findAll()
                .stream()
                .map(boardMapper::toProjectSummaryResponse)
                .collect(Collectors.toList());
    }

    @Override
    public BoardDetailsResponse getBoardById(Long id) {
        BoardEntity board = boardRepository.getBoardWithListsById(id)
                .orElseThrow(() -> new RuntimeException("Board not found"));

        return boardMapper.toBoardDetailsResponse(board);
    }

    @Override
    public BoardEntity getBoardByIdOrThrow(Long id) {
        return boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Board not found"));
    }
}
