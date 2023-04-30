package com.join.joinUs.auth.handler;

import com.google.gson.Gson;
import com.join.joinUs.Entity.User;
import com.join.joinUs.Exception.BusinessLogicException;
import com.join.joinUs.Exception.ExceptionCode;
import com.join.joinUs.Repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private UserRepository userRepository;

    public UserAuthenticationSuccessHandler(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        log.info("# Authenticated successfully!");

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        SuccessUserInfo successUserInfo = new SuccessUserInfo(HttpStatus.ACCEPTED.value(), user.getUserId(), user.getEmail(), user.getNickname());
        String responseInfo = new Gson().toJson(successUserInfo);

        response.setCharacterEncoding("utf-8");
        response.setStatus(HttpStatus.ACCEPTED.value());
        response.getWriter().write(responseInfo);
    }
}
