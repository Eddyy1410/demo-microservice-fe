import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (payload, {rejectWithValue}) => {
        try {
            const res = await authApi.register(payload);
            return res.data;
        } catch (error) {
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