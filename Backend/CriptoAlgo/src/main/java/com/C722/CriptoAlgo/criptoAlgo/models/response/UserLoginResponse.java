package com.C722.CriptoAlgo.criptoAlgo.models.response;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Date;

@Getter
@Setter
public class UserLoginResponse {

    String email;
    String token;
    String message;
    String time;
}
