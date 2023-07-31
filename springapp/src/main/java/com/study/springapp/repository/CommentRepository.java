package com.study.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.study.springapp.model.Comments;


public interface CommentRepository extends JpaRepository<Comments, Integer> {

}
