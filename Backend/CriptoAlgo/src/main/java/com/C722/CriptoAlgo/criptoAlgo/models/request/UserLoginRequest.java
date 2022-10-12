package com.C722.CriptoAlgo.criptoAlgo.models.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class UserLoginRequest {
    @Email @NotNull
    String email;
    @NotNull @NotEmpty @NotBlank
    String password;
}
