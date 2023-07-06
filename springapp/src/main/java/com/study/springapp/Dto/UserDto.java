package com.study.springapp.Dto;


import java.util.Date;



public class UserDto {
	
private int id;
	
private String userName;

private String name;

private String email;

private String password;

private Date dobDate;

public UserDto(int id, String userName, String name, String email, String password, Date dobDate) {
	super();
	this.id = id;
	this.userName = userName;
	this.name = name;
	this.email = email;
	this.password = password;
	this.dobDate = dobDate;
}

public UserDto() {
	super();
	// TODO Auto-generated constructor stub
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getUserName() {
	return userName;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public Date getDobDate() {
	return dobDate;
}

public void setDobDate(Date dobDate) {
	this.dobDate = dobDate;
}

@Override
public String toString() {
	return "UserDto [id=" + id + ", userName=" + userName + ", name=" + name + ", email=" + email + ", password="
			+ password + ", dobDate=" + dobDate + "]";
}

	
}
