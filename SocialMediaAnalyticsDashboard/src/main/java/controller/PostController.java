package controller;

import entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.PostService;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping("/{id}")
    public Post getPost(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.savePost(post);
    }
}
