package com.join.joinUs.Exception;

import lombok.Getter;

public enum ExceptionCode {
    // NOT FOUND //
    USER_NOT_FOUND(404, "USER NOT FOUND"),

    // EXISTS //
    USER_EXISTS(409, "USER EXISTS"),

    // NOT CHANGE //
    CANNOT_CHANGE_USER(403, "USER CAN NOT CHANGE"),

    // ETC //
    NOT_IMPLEMENTATION(501, "NOT IMPLEMENTATION"),
    USER_NOT_LOGIN(400, "USER NOT LOGIN"),
    INVALID_USER_STATUS(400, "INVALID USER STATUS"),
    INVALID_VALUES(400, "INVALID VALUES"),
    INVALID_REFRESH_TOKEN(400, "INVALID REFRESH_TOKEN"),

    UNAUTHORIZED(401, "Unauthorized");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
