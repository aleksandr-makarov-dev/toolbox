package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.ListCreateRequest;
import com.example.toolbox.features.workspace.dto.ListSummaryResponse;
import com.example.toolbox.features.workspace.mapper.ListMapper;
import com.example.toolbox.features.workspace.model.BoardEntity;
import com.example.toolbox.features.workspace.model.ListEntity;
import com.example.toolbox.features.workspace.repository.ListRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class JpaListService implements ListService {

    private final ListRepository listRepository;
    private final ListMapper listMapper;
    private final BoardService boardService;

    @Transactional
    @Override
    public ListSummaryResponse createList(ListCreateRequest request) {
        BoardEntity board = boardService.getBoardByIdOrThrow(request.boardId());

        ListEntity list = listMapper.toListEntity(request);
        board.addList(list);

        return listMapper.toListSummaryResponse(listRepository.save(list));
    }

    @Override
    public ListEntity getListByIdOrThrow(Long id) {
        return listRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("List not found."));
    }
}
