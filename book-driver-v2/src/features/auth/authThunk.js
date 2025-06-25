import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

export const registerUser = createAsyncThunk(
    "auth/register",// Không phải api mà là action của slice
    // Tên action này sẽ được sử dụng trong extraReducers của authSlice.js
    // *tên slice*/*tên action*
    async (payload, {rejectWithValue}) => {
        try {
            const res = await authApi.register(payload);
            return res.data;
        } catch (error) {
            console.error("Register error:", error);
            return rejectWithValue(error.response?.data?.message || "Register failed");
            //{
            //   message: "Request failed with status code 400",
            //   name: "AxiosError",
            //   response: {
            //     data: {
            //       message: "Email already exists"
            //     },
            //     status: 400,
            //     headers: {...}
            //   },
            //   config: {...},
            //   ...
            // }
        }
    }
);

export const loginDriver = createAsyncThunk(
    "auth/loginDriver",
    async (payload, {rejectWithValue}) => {
        try {
            const res = await authApi.loginDriver(payload);
            console.log(res);
            return res.data;
        } catch (error) {
            console.error("Login error:". error);
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);