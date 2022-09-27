package com.C722.CriptoAlgo.criptoAlgo.models.request;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserUpdateRequest {

    public class UserRegisterRequest {


        private String firstName;


        private String lastName;

        private String email;

        private String password;

    }
}
