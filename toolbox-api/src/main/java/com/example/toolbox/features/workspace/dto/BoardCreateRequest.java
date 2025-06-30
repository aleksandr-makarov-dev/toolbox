package com.example.toolbox.features.workspace.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record BoardCreateRequest(
        @NotBlank(message = "Title is required.")
        @Size(min = 3, max = 100, message = "Title must be between {min} and {max} characters.")
        String title
) {
}

