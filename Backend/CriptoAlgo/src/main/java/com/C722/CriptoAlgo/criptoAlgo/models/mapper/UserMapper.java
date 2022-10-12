package com.C722.CriptoAlgo.criptoAlgo.models.mapper;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.RoleEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.management.relation.Role;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Component
public class UserMapper {

    @Autowired
    private PasswordEncoder passwordEncoder;

    DateTimeFormatter dft = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");

   public UserEntity registerRequestToEntity(UserRegisterRequest userRequest, Set<RoleEntity> roles){
      UserEntity entity = new UserEntity();
      entity.setFirstName(userRequest.getFirstName());
      entity.setLastName(userRequest.getLastName());
      entity.setEmail(userRequest.getEmail());
      entity.setPassword(userRequest.getPassword());
      entity.setRoleId(roles);
      entity.setTimestamp(new Timestamp(System.currentTimeMillis()));

   return entity;
   }
    public UserResponse userEntityToResponse(UserEntity userEntity){
      UserResponse response = new UserResponse();
      response.setFirstName(userEntity.getFirstName());
      response.setLastName(userEntity.getLastName());
      response.setEmail(userEntity.getEmail());
      return response;
   }

   public List<UserResponse> userEntityListToResponse(List<UserEntity> users){
       List<UserResponse> response = new ArrayList<>();

       for(UserEntity user: users){
           response.add(userEntityToResponse(user));
       }
       return response;
   }

   public UserLoginResponse loginRequestToResponse(UserLoginRequest request, String token){
       UserLoginResponse response = new UserLoginResponse();
       response.setEmail(request.getEmail());
       response.setMessage("Bienvenido");
       response.setToken(token);
       response.setTime((dft.format(LocalDateTime.now())));
       return response;
   }

   public UserEntity updateRequestToEntity(UserUpdateRequest request,UserEntity entity){
       if(request.getFirstName() != null && !request.getFirstName().isEmpty() && !request.getFirstName().isBlank() ){
           entity.setFirstName(request.getFirstName());}
       if(request.getLastName() != null && !request.getLastName().isEmpty() && !request.getLastName().isBlank()){
           entity.setLastName(request.getLastName());}
       if(request.getPassword() != null && !request.getPassword().isEmpty() && !request.getLastName().isBlank()){
           entity.setPassword(passwordEncoder.encode(request.getPassword()));}
       return entity;
   }



}
