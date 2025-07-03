package com.example.toolbox.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ApiResponse<T> {

    private boolean flag;

    private int code;

    private T data;

    private String error;

    public static <T> ApiResponse<T> of(boolean flag, int code, T data, String error) {
        return new ApiResponse<>(flag, code, data, error);
    }
}
