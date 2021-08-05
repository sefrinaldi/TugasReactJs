package com.sefrinaldi.backendForJS.model;

public class User {

    private int id;
    private String fullname;
    private String username;
    private String password;
    private String address;

    public User() {
    }

    public User(int id, String fullname, String username, String password, String address) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.address = address;
    }

    public User(String fullname, String username, String password, String address) {
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.address = address;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public String getFullname() {
        return fullname;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getAddress() {
        return address;
    }
}
