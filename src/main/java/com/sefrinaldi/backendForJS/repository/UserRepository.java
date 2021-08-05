package com.sefrinaldi.backendForJS.repository;

import com.sefrinaldi.backendForJS.model.User;

import java.util.List;

public interface UserRepository {

    void saveUser(User user);
    List<User> findAllUser();
    void deleteUserById(int id);
    User findById(int id);
    void updateUser(User user);
    User findUsername(User user);
}
