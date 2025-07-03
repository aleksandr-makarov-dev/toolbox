package com.example.toolbox.util;

import com.example.toolbox.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseUtils {

    public static <T> ResponseEntity<ApiResponse<T>> ok(T data) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.of(true, HttpStatus.OK.value(), data, null));
    }

    public static <T> ResponseEntity<ApiResponse<T>> created(T data) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.of(true, HttpStatus.OK.value(), data, null));
    }

    public static ResponseEntity<ApiResponse<?>> notFound(String error) {
        return ResponseEntity.status(HttpStatus.FOUND)
                .body(ApiResponse.of(false, HttpStatus.NOT_FOUND.value(), null, error));
    }

    public static <T> ResponseEntity<ApiResponse<T>> badRequest(String error, T data) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ApiResponse.of(false, HttpStatus.BAD_REQUEST.value(), data, error));
    }

    public static ResponseEntity<ApiResponse<?>> internalServerError(String error) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponse.of(false, HttpStatus.INTERNAL_SERVER_ERROR.value(), null, error));
    }

    public static ResponseEntity<ApiResponse<?>> noContent() {
        return ResponseEntity.status(HttpStatus.NO_CONTENT)
                .body(ApiResponse.of(false, HttpStatus.NO_CONTENT.value(), null, null));
    }
}
