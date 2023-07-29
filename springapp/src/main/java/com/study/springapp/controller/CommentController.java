package com.study.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.springapp.exception.CommentException;
import com.study.springapp.exception.PostException;
import com.study.springapp.exception.UserException;
import com.study.springapp.model.Comments;
import com.study.springapp.model.User;
import com.study.springapp.services.CommentService;
import com.study.springapp.services.UserService;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create/{postId}")
	public ResponseEntity<Comments> createCommentHandler(@RequestBody Comments comment, @PathVariable("postId") Integer postId,@RequestHeader("Authorization")String token) throws PostException, UserException{
		User user = userService.findUserProfile(token);
		
		Comments createdComment = commentService.createComment(comment, postId, user.getId());
		return new ResponseEntity<Comments>(createdComment,HttpStatus.CREATED);
		
	}
	
	
	@PutMapping("/like/{commentId}")
	public ResponseEntity<Comments> likeCommentHandler(@PathVariable Integer commentId, @RequestHeader("Authorization")String token) throws UserException, CommentException{
		
		User user = userService.findUserProfile(token);
		Comments likedComment=commentService.likeComment(commentId, user.getId());
		return new ResponseEntity<Comments>(likedComment,HttpStatus.OK);
	}
	
	
	@PutMapping("/unlike/{commentId}")
	public ResponseEntity<Comments> unlikeCommentHandler(@RequestHeader("Authorization")String token, @PathVariable Integer commentId) throws UserException, CommentException{
		User user = userService.findUserProfile(token);
		Comments likedComment=commentService.unlikeComment(commentId, user.getId());
		
		return new ResponseEntity<Comments>(likedComment,HttpStatus.OK);
	}
	

}
