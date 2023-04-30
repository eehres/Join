package com.join.joinUs.Controller;

import com.join.joinUs.Dto.UserPostDto;
import com.join.joinUs.Dto.UserResponseDto;
import com.join.joinUs.Entity.User;
import com.join.joinUs.Mapper.UserMapper;
import com.join.joinUs.Repository.UserRepository;
import com.join.joinUs.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    private final UserRepository userRepository;


    @PostMapping("/signUp")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){
        User user = userService.createUser(userMapper.userPostDtoToUser(userPostDto));
        userRepository.save(user);
        UserResponseDto userResponseDto = userMapper.userToUserResponseDto(user);


        return new ResponseEntity(userResponseDto, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity getUser(@PathVariable("userId") Long userId) {
        User user = userService.findUser(userId);
        UserResponseDto userResponseDto = userMapper.userToUserResponseDto(user);

        return new ResponseEntity<>(userResponseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") @Positive Long userId){
        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/emailCheck/{email}")
    public ResponseEntity<Boolean> verifyExistsEmail(@PathVariable("email") String email){
        return ResponseEntity.ok(userService.emailCheck(email));
    }
}

