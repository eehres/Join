package com.join.joinUs.Service;

import com.join.joinUs.Entity.User;
import com.join.joinUs.Exception.BusinessLogicException;
import com.join.joinUs.Exception.ExceptionCode;
import com.join.joinUs.Mapper.UserMapper;
import com.join.joinUs.Repository.UserRepository;
import com.join.joinUs.Util.CustomBeanUtils;
import com.join.joinUs.auth.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    private final UserMapper userMapper;

    private final CustomBeanUtils<User> beanUtils;

    public User createUser(User user) {
        // 이미 등록된 이메일인지 확인
        verifyExistsEmail(user.getEmail());
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        return savedUser;
    }

    public User findUser(long userId) {
        return findVerifiedUser(userId);
    }


    //유저 삭제
    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);
        if(getLoginMember().getUserId() != findUser.getUserId())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        userRepository.delete(findUser);
    }

    public User findVerifiedUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
    public boolean emailCheck(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()){
            return false;
        }
        return true;
    }
    //로그인된 유저 정보 조회
    public User getLoginMember() { // 로그인된 유저 가져오기
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication == null || authentication.getName() == null || authentication.getName().equals("anonymousUser"))
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);

        Optional<User> optionalUser = userRepository.findByEmail(authentication.getName());
        User user = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return user;
    }


}

