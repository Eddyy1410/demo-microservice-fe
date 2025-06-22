import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: { 
    // bên store cũng có reducer như bên Slice
    // tức là tạo action bên reducer của Slice sau đó gôm tất cả vào reducer của Store
    auth: authReducer,
  },
});
