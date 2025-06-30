package com.example.toolbox.features.workspace.repository;

import com.example.toolbox.features.workspace.model.ListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepository extends JpaRepository<ListEntity, Long> {
}
