package com.example.toolbox.features.workspace.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ProjectCreateRequest(
        @NotBlank(message = "Title is required.")
        @Size(min = 3, max = 100, message = "Title must be between {min} and {max} characters.")
        String title,

        @Size(max = 1000, message = "Description must not exceed {max} characters.")
        String description
) {
}

