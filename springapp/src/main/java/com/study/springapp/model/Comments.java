package com.study.springapp.model;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.study.springapp.dto.UserDto;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

@Entity
public class Comments {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Embedded
	@NotNull
	@AttributeOverride(name="id",column = @Column(name="user_id"))
	private UserDto userDto;
	
	@NotNull
	private String content;
	
	@ElementCollection
	@Embedded
	private Set<UserDto> likedByUsers= new HashSet<>();
	
	private LocalDateTime createdAt;
	
	public Comments() {
		// TODO Auto-generated constructor stub
	}


	public Comments(Integer id, @NotNull UserDto userDto, @NotNull String content, Set<UserDto> likedByUsers,
			LocalDateTime createdAt) {
		super();
		this.id = id;
		this.userDto = userDto;
		this.content = content;
		this.likedByUsers = likedByUsers;
		this.createdAt = createdAt;
	}


	public LocalDateTime getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}


	public Set<UserDto> getLikedByUsers() {
		return likedByUsers;
	}





	public void setLikedByUsers(Set<UserDto> likedByUsers) {
		this.likedByUsers = likedByUsers;
	}





	public UserDto getUserDto() {
		return userDto;
	}


	public void setUserDto(UserDto userDto) {
		this.userDto = userDto;
	}





	@Override
	public String toString() {
		return "Comments [id=" + id + ", userDto=" + userDto + ", content=" + content + ", likedByUsers=" + likedByUsers
				+ "]";
	}

	
	
	

}
