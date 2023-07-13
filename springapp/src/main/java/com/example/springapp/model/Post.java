package com.example.springapp.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Post {
    @Id
    private int postId;
    private String title;
    private String content;
    private String createdAt;
    private String updatedAt;
    //private List<Comment> comments;
    
    // Constructors
    
    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    
    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
    
    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }
    
    // public List<Comment> getComments() {
    //     return comments;
    // }

    // public void setComments(List<Comment> comments) {
    //     this.comments = comments;
    // }
    
    // Other methods (such as constructors, toString, etc.)
}
