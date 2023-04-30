package com.join.joinUs.Mapper;

import com.join.joinUs.Dto.UserPostDto;
import com.join.joinUs.Dto.UserResponseDto;
import com.join.joinUs.Entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    UserResponseDto userToUserResponseDto(User user);
}


