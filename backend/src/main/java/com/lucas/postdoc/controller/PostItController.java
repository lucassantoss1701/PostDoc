package com.lucas.postdoc.controller;

import com.lucas.postdoc.exception.ResourceNotFoundException;
import com.lucas.postdoc.model.PostIt;
import com.lucas.postdoc.repository.PostItRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PostItController {

    @Autowired
    private PostItRepository postItRepository;

    @GetMapping("/postits")
    public List<PostIt> getAll(){
        return postItRepository.findAll();
    }

    @PostMapping("/postits")
    public PostIt createPostIt(@RequestBody PostIt postIt){
        return postItRepository.save(postIt);
    }

    @GetMapping("/postits/{id}")
    public ResponseEntity<PostIt> getPostItById(@PathVariable Long id){
        PostIt postIt = postItRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("PostIt not exist" +
                "whit id: "+id));
        return ResponseEntity.ok(postIt);
    }

    @PutMapping("/postits/{id}")
    public ResponseEntity<PostIt> updateEmployee(@PathVariable  Long id, @RequestBody PostIt postItDetails){
        PostIt postIt = postItRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("PostIt not exist" +
                "whit id: "+id));

        postIt.setTitle(postItDetails.getTitle());
        postIt.setMessage(postItDetails.getMessage());
        postIt.setDate(postItDetails.getDate());

        PostIt updatedPostit = postItRepository.save(postIt);
        return ResponseEntity.ok(updatedPostit);
    }

    @DeleteMapping("/postits/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        PostIt postIt = postItRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("PostIt not exist" +
                "whit id: "+id));

        postItRepository.delete(postIt);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
