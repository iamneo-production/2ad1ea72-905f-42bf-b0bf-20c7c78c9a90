package com.study.springapp.services;

import com.study.springapp.exception.CommentException;
import com.study.springapp.exception.PostException;
import com.study.springapp.exception.UserException;
import com.study.springapp.model.Comments;

public interface CommentService {
	
	public Comments createComment(Comments comment,Integer postId,Integer userId) throws PostException, UserException;

	public Comments findCommentById(Integer commentId) throws CommentException;
	public Comments likeComment(Integer CommentId,Integer userId) throws UserException, CommentException;
	public Comments unlikeComment(Integer CommentId,Integer userId) throws UserException, CommentException;
}
