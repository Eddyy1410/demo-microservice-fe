import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // Không khai báo thì trong storage sẽ không có key
    currentToken: null,
    register: {
      isFetching: false,
      success: false,
      error: null,
    },
  },

  reducers: {
    logout: (state) => {
    //Đây là 1 action của reducer
      state.currentToken = null;
    },
  },

  extraReducers: (builder) => {
    builder
        .addCase(registerUser.pending, (state) => {
            state.register.isFetching = true;
            state.register.success = false;
            state.register.error = null;
            //Vì sao cần set success và error trong khi initialState đã có?
            // Tránh trường hợp người dùng click vào nút đăng ký nhiều lần,
            // nếu không set lại thì sẽ hiển thị thông báo lỗi cũ
        })
        .addCase(registerUser.fulfilled, (state) => {
            state.register.isFetching = false;
            state.register.success = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.register.isFetching = false;
            state.register.success = false;
            state.register.error = action.payload;
            // action.payload là giá trị trả về trong hàm rejectWithValue (file userThunk.js)
        })
  },
});

export const { logout } = authSlice.actions; // xuất action của reducer để sử dụng trong components
// Tại sao không xuất extraReducers?
// extraReducers là phần xử lý bất đồng bộ, không phải là ACTION
export default authSlice.reducer; // xuất slice đưa vào store
