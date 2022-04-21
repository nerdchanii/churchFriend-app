// auth reducer
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const FETCH_LOGIN = 'auth/FETCH_LOGIN';

const initialState = {
  isLoggedIn: false,
  userId: null,
  profile: {
    name: 'kim',
    church: '더함공동체',
  },
  token: 'jsonWebToken',
};

export const fetchLogin = createAsyncThunk(
  FETCH_LOGIN,
  async (token, {extra}) => {
    // const {service} = extra;
    // const {data} = await service.authService.login(token);
    const data = await Promise.resolve({
      userId: 123,
      profile: {name: '예찬', church: '더함공동체교회'},
      token: 'json.web.token',
    });
    return data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.auth = {
        name: '',
        church: '',
      };
      state.token = '';
    },
  },
  extraReducers: {
    [fetchLogin.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.profile = action.payload.profile;
      state.token = action.payload.token;
    },
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
