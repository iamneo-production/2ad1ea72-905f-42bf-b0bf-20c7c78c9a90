package com.example.springapp.model;
import javax.persistence.*;

@Entity
public class Comment {

    @Id
    private int postId;
    private String text;
    private String createdDate;

    // Constructors

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    // Getters and setters for other fields
}
