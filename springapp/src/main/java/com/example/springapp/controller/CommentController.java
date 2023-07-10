package com.example.springapp.controller;

import com.example.springapp.model.Comment;
import com.example.springapp.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<Comment> getComment(@PathVariable int commentId) {
        Comment comment = commentService.getCommentById(commentId);
        return ResponseEntity.ok(comment);
    }

    @GetMapping("/post")
    public ResponseEntity<List<Comment>> getPostComments(@RequestParam int postId) {
        List<Comment> comments = commentService.getCommentsByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping
    public ResponseEntity<List<Comment>> getAllComments() {
        List<Comment> comments = commentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    @PostMapping
    public ResponseEntity<String> createComment(@RequestBody Comment comment) {
        commentService.createComment(comment);
        return ResponseEntity.ok("Comment created successfully");
    }

    @PutMapping("/{commentId}")
    public ResponseEntity<String> updateComment(@PathVariable int commentId, @RequestBody Comment comment) {
        commentService.updateComment(commentId, comment);
        return ResponseEntity.ok("Comment updated successfully");
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable int commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.ok("Comment deleted successfully");
    }
}
