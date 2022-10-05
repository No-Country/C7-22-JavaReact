package com.C722.CriptoAlgo.criptoAlgo.models.response;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
@Getter
@Setter
public class UserResponse {


    private String firstName;


    private String lastName;


    private String email;

}
