import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // ✅ type-only import

import { login } from "../../actions/auth/login";

interface AuthState {
  user: any | null;
  token: string | null;
  isLoggedIn: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk<
  { user: any; token: string },
  any,
  { rejectValue: string }
>("auth/fetchUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await login(formData);

    console.log("Login response:", response);

    if (!response.accessToken) {
      return rejectWithValue(response.message || "Login failed");
    }

    // Extract accessToken and user data
    const { accessToken, ...user } = response;

    // Save user and token separately in localStorage
    localStorage.setItem("auth", JSON.stringify({ user, token: accessToken }));

    return { user, token: accessToken };
  } catch (err: any) {
    return rejectWithValue(err.message || "Something went wrong");
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("auth");
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.status = "idle";
      state.error = null;
    },
    loadUserFromStorage: (
      state,
      action: PayloadAction<{ user: any; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const { logout, loadUserFromStorage } = loginSlice.actions;
export default loginSlice.reducer;
