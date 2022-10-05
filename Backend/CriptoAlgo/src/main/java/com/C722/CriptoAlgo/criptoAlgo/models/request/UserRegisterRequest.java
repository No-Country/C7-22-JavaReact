package com.C722.CriptoAlgo.criptoAlgo.models.request;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
@Getter
@Setter
public class UserRegisterRequest {

    @NonNull
    @NotBlank
    @NotEmpty
    private String firstName;

    @NonNull
    @NotBlank
    @NotEmpty
    private String lastName;

    @NotNull
    @Email
    private String email;

    @NotNull
    @NotEmpty
    private String password;

}
