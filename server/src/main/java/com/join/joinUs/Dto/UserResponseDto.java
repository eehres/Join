package com.join.joinUs.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;


@Builder
@Getter
@AllArgsConstructor
public class UserResponseDto {

    private Long userId;

    private String email;

    private String nickname;

    private String password;

    private String phone;

}
