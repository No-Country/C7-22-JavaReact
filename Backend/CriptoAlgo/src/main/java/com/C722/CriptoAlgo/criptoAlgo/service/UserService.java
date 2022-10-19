package com.C722.CriptoAlgo.criptoAlgo.service;

import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {

     List<UserResponse> getAll();

     UserResponse getById(Long id);

     void deleteById(Long id);

    UserResponse updateBasicUser(UserUpdateRequest request, String token);

    UserResponse getUserinfo(String token);
}
