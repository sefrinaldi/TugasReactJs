package com.sefrinaldi.backendForJS.controller;

import com.sefrinaldi.backendForJS.model.User;
import com.sefrinaldi.backendForJS.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RestApiController {

    public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

    @Autowired
    UserRepository userRepository;

    //----------------------------------View All User------------------------------------------------
    @RequestMapping(value = "/user/all", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<User>> viewAll() {
        List<User> listUser = userRepository.findAllUser();

        if (listUser == null) {
            return new ResponseEntity<>(listUser, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(listUser, HttpStatus.OK);
    }

    //---------------------------------Create User---------------------------------------------------
    @RequestMapping(value = "/user/register", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<?> createUser (@RequestBody User user){

        User newUser = userRepository.findUsername(user);

        if (newUser == null){
            userRepository.saveUser(user);

            return new ResponseEntity<>(user, HttpStatus.OK);
        }

        return new ResponseEntity<>(user, HttpStatus.CONFLICT);

    }

    //----------------------------------Login User------------------------------------------
    @RequestMapping(value = "/user/login", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<User> loginUser (@RequestBody User user) {

        User newUser = userRepository.findUsername(user);

        if (newUser != null){
            return new ResponseEntity<>(newUser, HttpStatus.OK);
        }
        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }

    //----------------------------------Update User------------------------------------------
    @RequestMapping(value = "/user/update/{id}", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity<?> updateUser (@PathVariable("id") int id, @RequestBody User user) {

        User dataUser = userRepository.findById(id);

        if (dataUser !=null) {

            int newId = dataUser.getId();
            String fullname = user.getFullname();
            String username = user.getUsername();
            String password = user.getPassword();
            String address = user.getAddress();

            User newUser = new User(newId, fullname, username, password, address);

            userRepository.updateUser(newUser);

            return new ResponseEntity<>(newUser, HttpStatus.OK);
        }

        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }

    //-------------------------------------------Delete User------------------------------------------
    @RequestMapping(value = "/user/delete/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<?> deleteUser (@PathVariable("id") int id) {

        User dataUser = userRepository.findById(id);

        if (dataUser != null) {

            userRepository.deleteUserById(id);

            return new ResponseEntity<>("Data berhasil di hapus", HttpStatus.OK);
        }

        return new ResponseEntity<>("data not found!!!", HttpStatus.NOT_FOUND);
    }
}
