package com.C722.CriptoAlgo.criptoAlgo.service.serviceImpl;

import com.C722.CriptoAlgo.criptoAlgo.Exceptions.UserAlreadyExistException;
import com.C722.CriptoAlgo.criptoAlgo.auth.RoleEnum;
import com.C722.CriptoAlgo.criptoAlgo.auth.service.UserDetailsCustomService;
import com.C722.CriptoAlgo.criptoAlgo.auth.utils.JwtUtils;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.RoleEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.mapper.UserMapper;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import com.C722.CriptoAlgo.criptoAlgo.repository.RoleRepository;
import com.C722.CriptoAlgo.criptoAlgo.repository.UserRepository;
import com.C722.CriptoAlgo.criptoAlgo.service.AuthService;
import com.C722.CriptoAlgo.criptoAlgo.service.UserService;
import com.C722.CriptoAlgo.criptoAlgo.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {

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
        @Autowired
        private AuthenticationManager authenticationManager;
        @Autowired
        WalletService walletService;

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
                roles.add(role);
            }

            userRequest.setPassword(passwordEncoder.encode(userRequest.getPassword()));
            UserEntity entity = userMapper.registerRequestToEntity(userRequest, roles);
            entity.setWallet(walletService.create(entity));
            userRepository.save(entity);

            return userMapper.userEntityToResponse(entity);
        }

        @Override
        public UserLoginResponse login(UserLoginRequest request) {

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            String token =generateToken(request.getEmail());
            UserLoginResponse response = userMapper.loginRequestToResponse(request,token);
            return response;
        }

    private String generateToken(String userRequest) {
        return jwtUtils.generateToken(userDetailsCustomService.loadUserByUsername(userRequest));
    }
}
