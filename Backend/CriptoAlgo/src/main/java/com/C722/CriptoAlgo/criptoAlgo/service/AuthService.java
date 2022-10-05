package com.C722.CriptoAlgo.criptoAlgo.service;

import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;

public interface AuthService {

    UserResponse register (UserRegisterRequest user);

    UserLoginResponse login(UserLoginRequest request);
}
