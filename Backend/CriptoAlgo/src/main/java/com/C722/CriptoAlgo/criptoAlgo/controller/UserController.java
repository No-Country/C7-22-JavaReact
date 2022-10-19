package com.C722.CriptoAlgo.criptoAlgo.controller;

import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import com.C722.CriptoAlgo.criptoAlgo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping (path = "/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getAll")
    public ResponseEntity<List<UserResponse>> getAll(){
        return ResponseEntity.ok(userService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserbyId(@PathVariable("id") @Valid @NotNull Long id){
        return ResponseEntity.ok(userService.getById(id));
    }

    @PatchMapping("/me")
    public ResponseEntity<UserResponse> updateUser(@RequestHeader(name = "Authorization") String token,
                                                          @RequestBody @Valid UserUpdateRequest request) {
        UserResponse update = userService.updateBasicUser(request, token);
        return ResponseEntity.ok().body(update);

    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> updateUser(@RequestHeader(name = "Authorization") String token) {
        UserResponse update = userService.getUserinfo(token);
        return ResponseEntity.ok().body(update);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id")@Valid @NotNull Long id) {
        userService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


}
