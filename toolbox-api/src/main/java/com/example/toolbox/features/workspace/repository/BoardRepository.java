package com.example.toolbox.features.workspace.repository;

import com.example.toolbox.features.workspace.model.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Long> {

    @Query("SELECT b FROM BoardEntity b LEFT JOIN FETCH b.lists WHERE b.id = :id")
    Optional<BoardEntity> getBoardWithListsById(@Param("id") Long id);
}
