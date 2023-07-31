package com.study.springapp.services;

import java.util.List;

import com.study.springapp.exception.PostException;
import com.study.springapp.exception.UserException;
import com.study.springapp.model.Post;
import com.study.springapp.model.User;

public interface PostService {

	public Post createPost(Post post,Integer userId) throws UserException;
	
	public String deletePost(Integer postId, Integer userId) throws UserException,PostException;
	
	public List<Post> findPostByUserId(Integer userId) throws UserException;
	
	public Post findePostById(Integer postId) throws PostException;
	
	public List<Post> findAllPost() throws PostException;
	
	public List<Post> findAllPostByUserIds(List<Integer> userIds) throws PostException, UserException;
	
	public String savedPost(Integer postId,Integer userId) throws PostException, UserException;
	
	public String unSavePost(Integer postId,Integer userId) throws PostException, UserException;
		
	public Post likePost(Integer postId ,Integer userId) throws UserException, PostException;
	
	public Post unLikePost(Integer postId ,Integer userId) throws UserException, PostException;
	
}
