package com.example.toolbox.features.workspace.mapper;

import com.example.toolbox.features.workspace.dto.ListCreateRequest;
import com.example.toolbox.features.workspace.dto.ListSummaryResponse;
import com.example.toolbox.features.workspace.model.ListEntity;
import org.springframework.stereotype.Component;

@Component
public class ListMapper {

    public ListEntity toListEntity(ListCreateRequest request) {
        return ListEntity.builder()
                .title(request.title())
                .build();
    }

    public ListSummaryResponse toListSummaryResponse(ListEntity list) {
        return new ListSummaryResponse(list.getId(), list.getTitle());
    }
}
