package com.C722.CriptoAlgo.criptoAlgo.models.response;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class UserLoginResponse {

    String email;
    String password;
    String token;
    String message;
    Timestamp time;
}
