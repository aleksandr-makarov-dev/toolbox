package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.TaskCreateRequest;
import com.example.toolbox.features.workspace.dto.TaskSummaryResponse;

import java.util.List;

public interface TaskService {

    TaskSummaryResponse createTask(TaskCreateRequest request);

    List<TaskSummaryResponse> getTasksByBoardId(Long boardId);

}
