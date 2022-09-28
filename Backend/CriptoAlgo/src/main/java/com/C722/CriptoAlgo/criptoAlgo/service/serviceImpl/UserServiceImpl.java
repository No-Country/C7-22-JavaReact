package com.C722.CriptoAlgo.criptoAlgo.service.serviceImpl;

import com.C722.CriptoAlgo.criptoAlgo.Exceptions.UserAlreadyExistException;
import com.C722.CriptoAlgo.criptoAlgo.auth.RoleEnum;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.RoleEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.mapper.UserMapper;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import com.C722.CriptoAlgo.criptoAlgo.repository.RoleRepository;
import com.C722.CriptoAlgo.criptoAlgo.repository.UserRepository;
import com.C722.CriptoAlgo.criptoAlgo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public UserResponse register(UserRegisterRequest userRequest) {
        if (userRepository.findByEmail(userRequest.getEmail()).isPresent()){
            throw new UserAlreadyExistException();
        }

        Set<RoleEntity> roles = roleRepository.findByName(RoleEnum.USER.getSimpleRoleName());
        if (roles.isEmpty()) {
            RoleEntity role = new RoleEntity();
            role.setName(RoleEnum.USER.getSimpleRoleName());
            role = roleRepository.save(role);
        }

        userRequest.setPassword(passwordEncoder.encode(userRequest.getPassword()));
       UserEntity entity = UserMapper.INSTANCE.registerRequestToEntity(userRequest);
        userRepository.save(entity);
        String token =


return null;
    }

    @Override
    public List<UserResponse> getAll() {
        return null;
    }

    @Override
    public UserResponse getById() {
        return null;
    }

    @Override
    public UserResponse updateById(Long id, UserUpdateRequest request) {
        return null;
    }

    @Override
    public void delteById(Long id) {

    }
}
