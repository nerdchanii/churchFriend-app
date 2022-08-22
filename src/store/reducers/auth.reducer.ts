// auth reducer

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import authService from '../../service/auth.service';

export type AuthState = {
  isLoggedIn: boolean;
  auth: {
    userId: number | null;
    profile: {
      username: string | null;
      church: string | null;
    };
  } | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  auth: null,
};

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (data: {email: string; password: string}) => {
    console.log('fecth login', data);
    const response = await authService.login(data);
    console.log(response);
    return response.data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.auth = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.auth = {
        userId: action.payload.id,
        profile: {
          username: action.payload.username,
          church: action.payload.church,
        },
      };
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.auth = null;
    });
  },
});

const {reducer} = authSlice;
export default reducer;
