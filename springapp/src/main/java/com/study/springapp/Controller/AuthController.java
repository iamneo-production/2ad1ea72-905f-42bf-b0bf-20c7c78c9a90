package com.study.springapp.Controller;

import java.io.Console;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.springapp.Entity.User;
import com.study.springapp.Exception.ApiException;
import com.study.springapp.Dto.JwtAuthRequest;
import com.study.springapp.Dto.JwtAuthResponse;
import com.study.springapp.Dto.UserDto;
import com.study.springapp.Security.CustomUserDetailService;
import com.study.springapp.Security.JwtTokenHelper;

@RestController
@RequestMapping("/api/")
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthController {
	
	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/authenticate")
	private ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception{
		authenticate(request.getUsername(), request.getPassword());
        System.out.println("User after");
		UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
		String token = jwtTokenHelper.generateToken(userDetails);
		JwtAuthResponse response = new JwtAuthResponse();
		response.setToken(token);
		response.setUser(mapper.map((User)userDetails, UserDto.class));
		return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
	}

	private void authenticate(String userName, String password) throws Exception {
		
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userName, password);
	
		try {
			authenticationManager.authenticate(authenticationToken);
			
		} catch (IllegalArgumentException e) {
			System.out.println("Invalid details");
			throw new ApiException("Invalid Username or Password");
		}
		
	}

}
