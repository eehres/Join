package com.join.joinUs.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class UserPostDto {

    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;

    @NotBlank
    private String nickname;

    @NotBlank
    private String phone;
}