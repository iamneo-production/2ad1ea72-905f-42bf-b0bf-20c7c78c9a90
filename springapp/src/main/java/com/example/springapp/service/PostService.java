package com.example.springapp.service;

import com.example.springapp.model.Post;
import com.example.springapp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(int postId) {
        return postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("Post not found with ID: " + postId));
    }

    public void createPost(Post post) {
        // Set createdAt and updatedAt fields if required
        postRepository.save(post);
    }

    public void updatePost(int postId, Post post) {
        Post existingPost = getPostById(postId);
        // Update existingPost with new data
        // Save the updated post
        postRepository.save(existingPost);
    }

    public void deletePost(int postId) {
        Post post = getPostById(postId);
        postRepository.delete(post);
    }
}
