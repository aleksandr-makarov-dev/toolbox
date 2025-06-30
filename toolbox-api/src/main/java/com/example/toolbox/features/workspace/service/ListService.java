package com.example.toolbox.features.workspace.service;

import com.example.toolbox.features.workspace.dto.ListCreateRequest;
import com.example.toolbox.features.workspace.dto.ListSummaryResponse;
import com.example.toolbox.features.workspace.model.ListEntity;

public interface ListService {

    ListSummaryResponse createList(ListCreateRequest request);

    ListEntity getListByIdOrThrow(Long id);
}
