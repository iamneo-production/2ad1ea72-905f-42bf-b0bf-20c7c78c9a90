package com.example.springapp.service;

import com.example.springapp.model.Comment;
import com.example.springapp.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment getCommentById(int commentId) {
        return commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("Comment not found with ID: " + commentId));
    }

    public List<Comment> getCommentsByPostId(int postId) {
        return commentRepository.findAll().stream()
                .filter(comment -> comment.getPostId() == postId)
                .collect(Collectors.toList());
    }

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public void createComment(Comment comment) {
        // Set createdDate field if required
        commentRepository.save(comment);
    }

    public void updateComment(int commentId, Comment comment) {
        Comment existingComment = getCommentById(commentId);
        // Update existingComment with new data
        // Save the updated comment
        commentRepository.save(existingComment);
    }

    public void deleteComment(int commentId) {
        Comment comment = getCommentById(commentId);
        commentRepository.delete(comment);
    }
}

