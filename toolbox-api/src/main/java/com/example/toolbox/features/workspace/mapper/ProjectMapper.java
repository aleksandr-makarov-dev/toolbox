package com.example.toolbox.features.workspace.mapper;

import com.example.toolbox.features.workspace.dto.ProjectCreateRequest;
import com.example.toolbox.features.workspace.dto.ProjectSummaryResponse;
import com.example.toolbox.features.workspace.model.Project;
import com.example.toolbox.features.workspace.model.ProjectStatus;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    public Project toProject(ProjectCreateRequest request) {
        return Project.builder()
                .title(request.title())
                .description(request.description())
                .status(ProjectStatus.DRAFT)
                .build();
    }

    public ProjectSummaryResponse toProjectSummaryResponse(Project project) {
        return new ProjectSummaryResponse(
                project.getId(),
                project.getTitle(),
                project.getStatus(),
                project.getCreatedAt()
        );
    }
}
