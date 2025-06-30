package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.ProjectCreateRequest;
import com.example.toolbox.features.workspace.dto.ProjectSummaryResponse;
import com.example.toolbox.features.workspace.mapper.ProjectMapper;
import com.example.toolbox.features.workspace.model.Project;
import com.example.toolbox.features.workspace.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JpaProjectService implements ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    @Override
    public ProjectSummaryResponse createProject(ProjectCreateRequest request) {
        Project project = projectMapper.toProject(request);
        return projectMapper.toProjectSummaryResponse(projectRepository.save(project));
    }

    @Override
    public List<ProjectSummaryResponse> getAllProjects() {
        return projectRepository.findAll()
                .stream()
                .map(projectMapper::toProjectSummaryResponse)
                .collect(Collectors.toList());
    }
}
