package com.lucas.postdoc.repository;

import com.lucas.postdoc.model.PostIt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostItRepository extends JpaRepository<PostIt, Long> {
}
