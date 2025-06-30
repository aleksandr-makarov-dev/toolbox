package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.ProjectCreateRequest;
import com.example.toolbox.features.workspace.dto.ProjectSummaryResponse;

import java.util.List;

public interface ProjectService {

    ProjectSummaryResponse createProject(ProjectCreateRequest request);

    List<ProjectSummaryResponse> getAllProjects();
}
