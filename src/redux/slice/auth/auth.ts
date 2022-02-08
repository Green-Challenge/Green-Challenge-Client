import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthService} from 'service/auth/auth';
import {FetchThunkData, getInitialState} from 'utils/reduxUtils';
import {User} from './type';

export const signUp = createAsyncThunk('auth/signUp', AuthService.signUp);
export const me = createAsyncThunk('auth/me', AuthService.me);
export const signIn = createAsyncThunk('auth/signIn', AuthService.signIn);
// export const signIn = createAsyncThunk()

const initialState = {
  user: getInitialState<User>(),
  register: getInitialState<User>(),
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
  reducers: {},
  extraReducers: builder => {
    fetchSignUp.getFetchThunkReducer(builder);
    fetchSignIn.getFetchThunkReducer(builder);
  },
});

export default authSlice.reducer;
