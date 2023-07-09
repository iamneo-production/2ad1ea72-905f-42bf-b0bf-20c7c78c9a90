package com.study.springapp.Exception;

public class ResourcesNotFoundException extends RuntimeException {
	
	String resourceName;
	String fieldName;
	long fieldValue;
	public ResourcesNotFoundException(String resourceName, String fieldName, long fieldValue) {
		super(String.format("%s not found with %s : %s", resourceName, fieldName, fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
	

}