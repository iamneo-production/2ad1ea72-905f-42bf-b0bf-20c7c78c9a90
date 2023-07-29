package com.study.springapp.model;

import lombok.Getter;

@Getter
public enum NotificationTypeEnum {
	
	LIKE("like"), COMMENT("Write a comment"), FOLLOW("follow");
	
	private String key;

	NotificationTypeEnum(String key) {
		this.key = key;
	}
}
