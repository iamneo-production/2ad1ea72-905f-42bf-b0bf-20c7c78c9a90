package com.study.springapp.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import com.study.springapp.config.SecurityContest;
import com.study.springapp.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtTokenProvider {
	
	public JwtTokenClaims getClaimsFromToken(String token) {
		SecretKey key= Keys.hmacShaKeyFor(SecurityContest.JWT_KEY.getBytes());
		
	    Claims claims = Jwts.parser()
	            .setSigningKey(key)
	            .parseClaimsJws(token)
	            .getBody();
	    String username= String.valueOf(claims.get("username"));

	    JwtTokenClaims jwtTokenClaims = new JwtTokenClaims();
	    jwtTokenClaims.setUsername(username);

	    return jwtTokenClaims;
	}
	
	public String  generateJwtToken(User user) {
		SecretKey key=Keys.hmacShaKeyFor(SecurityContest.JWT_KEY.getBytes());
		
		String jwt=Jwts.builder()
				.setIssuer("Virtusa Internship")
				.claim("username",user.getEmail())
				.setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime()+ 990000000))
				.signWith(key).compact();
		
		
		return jwt;
	}


}
