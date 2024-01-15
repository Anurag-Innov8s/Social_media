import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated:false,
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      console.log(action);
      console.log(state)
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated=true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated=false;
    },
    RegisterRequest: (state) => {
      state.loading = true;
    },
    RegisterSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated=true;
    },
    RegisterFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated=false;
    },
    LoadUserRequest: (state) => {
      state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated=true;
    },
    LoadUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated=false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  RegisterRequest,
  RegisterSuccess,
  RegisterFailure,
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
