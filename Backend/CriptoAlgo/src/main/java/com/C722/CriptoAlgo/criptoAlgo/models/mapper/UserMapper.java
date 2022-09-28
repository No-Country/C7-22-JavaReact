package com.C722.CriptoAlgo.criptoAlgo.models.mapper;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserRegisterRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public  interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);


    UserEntity registerRequestToEntity(UserRegisterRequest userRequest);
    UserResponse userEntityToResponse(UserEntity userEntity);




}
