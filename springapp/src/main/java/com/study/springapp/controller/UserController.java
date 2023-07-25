package com.study.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.study.springapp.exception.PostException;
import com.study.springapp.exception.UserException;
import com.study.springapp.model.User;
import com.study.springapp.response.MessageResponse;
import com.study.springapp.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	
	@GetMapping("id/{id}")
	public ResponseEntity<User> findUserByIdHandler(@PathVariable Integer id) throws UserException{
		
		User user=userService.findUserById(id);
		
		return new ResponseEntity<User>(user,HttpStatus.OK);
	}
	
	
	@GetMapping("username/{username}")
	public ResponseEntity<User> findByUsernameHandler(@PathVariable("username") String username) throws UserException{
		
		User user = userService.findUserByUsername(username);
		
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
		
	}
	
	@PutMapping("/follow/{followUserId}")
	public ResponseEntity<MessageResponse> followUserHandler(@RequestHeader("Authorization") String token, @PathVariable Integer followUserId) throws UserException{
		User reqUser=userService.findUserProfile(token);
		
		String message=userService.followUser(reqUser.getId(), followUserId);
		MessageResponse res=new MessageResponse(message);
		return new ResponseEntity<MessageResponse>(res,HttpStatus.OK);
	}
	
	@PutMapping("/unfollow/{unfollowUserId}")
	public ResponseEntity<MessageResponse> unfollowUserHandler(@RequestHeader("Authorization") String token, @PathVariable Integer unfollowUserId) throws UserException{
		
		User reqUser=userService.findUserProfile(token);
		
		String message=userService.unfollowUser(reqUser.getId(), unfollowUserId);
		MessageResponse res=new MessageResponse(message);
		return new ResponseEntity<MessageResponse>(res,HttpStatus.OK);
	}
	
	@GetMapping("/req")
	public ResponseEntity<User> findUserProfileHandler(@RequestHeader("Authorization") String token) throws UserException{
		
		User user=userService.findUserProfile(token);
		
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
		

	}
	
	@GetMapping("/m/{userIds}")
	public ResponseEntity<List<User>> findAllUsersByUserIdsHandler(@PathVariable List<Integer> userIds){
		List<User> users=userService.findUsersByUserIds(userIds);
		
		return new ResponseEntity<List<User>>(users,HttpStatus.ACCEPTED);
		
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<User>> searchUserHandler(@RequestParam("q")String query) throws UserException{
		
		List<User> users=userService.searchUser(query);
		
		return new ResponseEntity<List<User>>(users,HttpStatus.OK);
	}
	
	@PutMapping("/account/edit")
	public ResponseEntity<User> updateUser(@RequestHeader("Authorization") String token, @RequestBody User user) throws UserException{
		
		User reqUser=userService.findUserProfile(token);
		User updatedUser=userService.updateUserDetails(user, reqUser);
		
		return new ResponseEntity<User>(updatedUser,HttpStatus.OK);
		
	}


}
