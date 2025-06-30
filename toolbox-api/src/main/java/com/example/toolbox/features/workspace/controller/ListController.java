package com.example.toolbox.features.workspace.controller;

import com.example.toolbox.dto.ApiResponse;
import com.example.toolbox.features.workspace.dto.ListCreateRequest;
import com.example.toolbox.features.workspace.dto.ListSummaryResponse;
import com.example.toolbox.features.workspace.service.ListService;
import com.example.toolbox.util.ResponseUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/lists")
@RequiredArgsConstructor
public class ListController {

    private final ListService listService;

    @PostMapping
    public ResponseEntity<ApiResponse<ListSummaryResponse>> createList(@RequestBody @Valid ListCreateRequest request) {
        return ResponseUtils.created(listService.createList(request));
    }
}
