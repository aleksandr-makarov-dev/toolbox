package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.TaskCreateRequest;
import com.example.toolbox.features.workspace.dto.TaskSummaryResponse;
import com.example.toolbox.features.workspace.mapper.TaskMapper;
import com.example.toolbox.features.workspace.model.ListEntity;
import com.example.toolbox.features.workspace.model.TaskEntity;
import com.example.toolbox.features.workspace.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JpaTaskService implements TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;
    private final ListService listService;

    @Override
    public TaskSummaryResponse createTask(TaskCreateRequest request) {
        ListEntity list = listService.getListByIdOrThrow(request.listId());

        TaskEntity task = taskMapper.toTaskEntity(request);
        task.setList(list);

        return taskMapper.toTaskSummaryResponse(taskRepository.save(task));
    }

    @Override
    public List<TaskSummaryResponse> getTasksByBoardId(Long boardId) {
        return taskRepository.getTasksByBoardId(boardId)
                .stream()
                .map(taskMapper::toTaskSummaryResponse)
                .collect(Collectors.toList());
    }
}
