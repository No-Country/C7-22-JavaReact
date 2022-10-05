package com.C722.CriptoAlgo.criptoAlgo.controller;

import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import com.C722.CriptoAlgo.criptoAlgo.service.AuthService;
import com.C722.CriptoAlgo.criptoAlgo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
@Controller
@RequestMapping(path = "/auth")
public class AuthController {

        @Autowired
        AuthService authService;

        @PostMapping("/register")
        public ResponseEntity<UserResponse> register(@Valid @RequestBody UserRegisterRequest userRequest) {
            return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(userRequest));
        }

        @PostMapping("/login")
        public ResponseEntity<UserLoginResponse> login(@Valid @RequestBody UserLoginRequest request) throws UsernameNotFoundException {
            return ResponseEntity.ok(authService.login(request));
        }
    }
