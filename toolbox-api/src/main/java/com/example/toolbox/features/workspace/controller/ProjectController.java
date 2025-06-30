package com.example.toolbox.features.workspace.controller;

import com.example.toolbox.dto.ApiResponse;
import com.example.toolbox.features.workspace.dto.ProjectCreateRequest;
import com.example.toolbox.features.workspace.dto.ProjectSummaryResponse;
import com.example.toolbox.features.workspace.repository.ProjectRepository;
import com.example.toolbox.features.workspace.service.ProjectService;
import com.example.toolbox.util.ResponseUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<ApiResponse<ProjectSummaryResponse>> createProject(@RequestBody ProjectCreateRequest request) {
        return ResponseUtils.created(projectService.createProject(request));
    }

    @GetMapping()
    public ResponseEntity<ApiResponse<List<ProjectSummaryResponse>>> getAllProjects() {
        return ResponseUtils.ok(projectService.getAllProjects());
    }
}
