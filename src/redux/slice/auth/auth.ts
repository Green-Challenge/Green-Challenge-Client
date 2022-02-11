import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {AuthService} from 'service/auth/auth';
import {FetchThunkData, getInitialState} from 'utils/reduxUtils';
import {IsAuthType, User} from './type';

export const signUp = createAsyncThunk('auth/signUp', AuthService.signUp);
export const me = createAsyncThunk('auth/me', AuthService.me);
export const signIn = createAsyncThunk('auth/signIn', AuthService.signIn);

const initialState = {
  user: getInitialState<User>(),
  register: getInitialState<User>(),
  isAuth: {
    isAuth: false,
    userId: null,
  } as IsAuthType,
};

const fetchSignUp = new FetchThunkData({
  fetch: signUp,
  keep: false,
  key: 'register',
});

const fetchSignIn = new FetchThunkData({
  fetch: signIn,
  keep: false,
  key: 'user',
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    meAuth(state, action: PayloadAction<IsAuthType>) {
      state.isAuth.isAuth = action.payload.isAuth;
      state.isAuth.userId = action.payload.userId;
    },
  },
  extraReducers: builder => {
    fetchSignUp.getFetchThunkReducer(builder);
    fetchSignIn.getFetchThunkReducer(builder);
  },
});

export default authSlice.reducer;
export const {meAuth} = authSlice.actions;
