package com.join.joinUs.auth.handler;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SuccessUserInfo {
    private int httpStatus;
    private Long userId;
    private String email;
    private String nickname;
}
