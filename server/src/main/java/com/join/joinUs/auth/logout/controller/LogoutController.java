package com.join.joinUs.auth.logout.controller;

import com.join.joinUs.Entity.User;
import com.join.joinUs.Exception.BusinessLogicException;
import com.join.joinUs.Exception.ExceptionCode;
import com.join.joinUs.Service.UserService;
import com.join.joinUs.auth.jwt.JwtTokenizer;
import org.springframework.http.ResponseEntity;
import com.join.joinUs.auth.utils.RedisUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotBlank;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LogoutController {
    private final JwtTokenizer jwtTokenizer;
    private final RedisUtil redisUtil;
    private final UserService userService;

    // 로그아웃 //
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") @NotBlank String token){
        User user = userService.getLoginMember();

        String accessToken = token.replace("Bearer ", "");
        String encodeBase64SecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        log.info("access 토큰 남은 유효시간 : " + jwtTokenizer.getExpiration(accessToken, encodeBase64SecretKey));

        try{
            redisUtil.setBlackList(accessToken, "access_token", jwtTokenizer.getBlacklistTime(jwtTokenizer.getExpiration(accessToken, encodeBase64SecretKey)));
        } catch (NullPointerException e) {
            throw new BusinessLogicException(ExceptionCode.USER_NOT_LOGIN);
        }

        if (redisUtil.hasKey(user.getEmail())) {
            redisUtil.delete(user.getEmail());
        }
        return ResponseEntity.ok("로그아웃 성공");
    }
}
