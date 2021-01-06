package com.lucas.postdoc.model;

import javax.persistence.*;

@Entity
@Table(name = "PostIt" )
public class PostIt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;
    @Column(name = "message")
    private String message;
    @Column(name = "date")
    private String date;

    public PostIt(){

    }

    public PostIt(Long id, String title, String message, String date) {
        this.title = title;
        this.message = message;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
