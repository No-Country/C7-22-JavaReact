package com.C722.CriptoAlgo.criptoAlgo.models.mapper;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.RoleEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserLoginRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserLoginResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import org.springframework.stereotype.Component;

import javax.management.relation.Role;
import java.sql.Timestamp;
import java.util.Set;

@Component
public class UserMapper {

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

   public UserLoginResponse loginRequestToResponse(UserLoginRequest request, String token){
       UserLoginResponse response = new UserLoginResponse();
       response.setEmail(request.getEmail());
       response.setMessage("Bienvenido");
       response.setToken(token);
       response.setTime(new Timestamp(System.currentTimeMillis()));
       return response;
   }

}
