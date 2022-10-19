package com.C722.CriptoAlgo.criptoAlgo.service.serviceImpl;

import com.C722.CriptoAlgo.criptoAlgo.auth.service.UserDetailsCustomService;
import com.C722.CriptoAlgo.criptoAlgo.auth.utils.JwtUtils;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.mapper.UserMapper;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import com.C722.CriptoAlgo.criptoAlgo.repository.RoleRepository;
import com.C722.CriptoAlgo.criptoAlgo.repository.UserRepository;
import com.C722.CriptoAlgo.criptoAlgo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserDetailsCustomService userDetailsCustomService;
    @Autowired
    private UserMapper userMapper;


    @Override
    public List<UserResponse> getAll() {
        List<UserEntity> users = userRepository.findAll();
        List<UserResponse> responses = userMapper.userEntityListToResponse(users);
        return responses;
    }

    @Override
    public UserResponse getById(Long id) {
        UserEntity entity = userRepository.findById(id).get();
        UserResponse response = userMapper.userEntityToResponse(entity);
        return response;
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserResponse updateBasicUser(UserUpdateRequest request, String token) {
        String userToken = rebuildToken(token);
        UserEntity entity = userRepository.findByEmail( jwtUtils.extractUsername(userToken)).get();
        userMapper.updateRequestToEntity(request, entity);
        userRepository.save(entity);
        return userMapper.userEntityToResponse(entity);
    }

    @Override
    public UserResponse getUserinfo(String token) {
        String userToken = rebuildToken(token);
        UserEntity entity = userRepository.findByEmail( jwtUtils.extractUsername(userToken)).get();
        return userMapper.userEntityToResponse(entity);
    }

    public String rebuildToken(String token){
        String [] part = token.split(" ");
        String token2 = part[1];
        return token2;
    }
}
