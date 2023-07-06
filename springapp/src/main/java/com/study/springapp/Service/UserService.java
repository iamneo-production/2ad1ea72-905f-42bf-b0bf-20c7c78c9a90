package com.study.springapp.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.study.springapp.Entity.User;
import com.study.springapp.Repository.UserRepo;
import com.study.springapp.Dto.UserDto;
import com.study.springapp.Dto.LoginDto;
import com.study.springapp.Response.LoginResponse;


@Service
public class UserService{
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	UserRepo userRepo;

	
	public String addUser(UserDto userDto) {
		User user = modelMapper.map(userDto, User.class);
		if (userRepo.existsByEmail(user.getEmail())) {
			return "Email already exists";
		}
		user.setPassword(passwordEncoder.encode(userDto.getPassword()));
		userRepo.save(user);
		return user.getUserName();
	}
	
	// public LoginResponse loginUser(LoginDto loginDto) {
	// 	User user = userRepo.findByEmail(loginDto.getEmail());
	// 	if(user == null) return new LoginResponse("No email exists",false);
	// 	String currPass = loginDto.getPassword();
	// 	String encodePass = user.getPassword();
	// 	Boolean isMatched = passwordEncoder.matches(currPass, encodePass);
	// 	if(!isMatched) {
	// 		return new LoginResponse("Password is incorrect", false);
	// 	}else {
	// 		return new LoginResponse("Successfully LogedIn",true);
	// 	}
	// }


}
