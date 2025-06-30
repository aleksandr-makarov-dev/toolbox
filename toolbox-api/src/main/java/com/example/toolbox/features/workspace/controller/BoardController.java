package com.example.toolbox.features.workspace.controller;

import com.example.toolbox.dto.ApiResponse;
import com.example.toolbox.features.workspace.dto.BoardCreateRequest;
import com.example.toolbox.features.workspace.dto.BoardDetailsResponse;
import com.example.toolbox.features.workspace.dto.BoardSummaryResponse;
import com.example.toolbox.features.workspace.dto.TaskSummaryResponse;
import com.example.toolbox.features.workspace.service.BoardService;
import com.example.toolbox.features.workspace.service.TaskService;
import com.example.toolbox.util.ResponseUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<ApiResponse<BoardSummaryResponse>> createProject(@RequestBody BoardCreateRequest request) {
        return ResponseUtils.created(boardService.createProject(request));
    }

    @GetMapping()
    public ResponseEntity<ApiResponse<List<BoardSummaryResponse>>> getAllProjects() {
        return ResponseUtils.ok(boardService.getAllProjects());
    }

    @GetMapping("{id}")
    public ResponseEntity<ApiResponse<BoardDetailsResponse>> getBoardById(@PathVariable Long id) {
        return ResponseUtils.ok(boardService.getBoardById(id));
    }

    @GetMapping("{id}/tasks")
    public ResponseEntity<ApiResponse<List<TaskSummaryResponse>>> getTasksByBoardId(@PathVariable Long id) {
        return ResponseUtils.ok(taskService.getTasksByBoardId(id));
    }
}
