package com.study.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.study.springapp.Dto.UserDto;
import com.study.springapp.Dto.LoginDto;
import com.study.springapp.Service.UserService;
import com.study.springapp.Response.LoginResponse;

@RestController
@RequestMapping("/api/")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/register")
	public String registerUser(@RequestBody UserDto userDto) {
		String addUser = userService.addUser(userDto);
		return addUser;
	}

	// @PostMapping("/authenticate")
	// public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto){
	// 	LoginResponse loginUser = userService.loginUser(loginDto);
	// 	return ResponseEntity.ok(loginUser);
	// }
	
	
	
	

}
