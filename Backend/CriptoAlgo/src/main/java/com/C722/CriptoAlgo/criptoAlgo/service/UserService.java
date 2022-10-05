package com.C722.CriptoAlgo.criptoAlgo.service;

import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse register (UserRegisterRequest user);

    UserLoginResponse login(UserLoginRequest request);

     List<UserResponse> getAll();

     UserResponse getById();

     UserResponse updateById(Long id, UserUpdateRequest request);

     void delteById(Long id);


}
