import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import * as AuthService from 'service/auth/auth';
import {User} from './type';

export const signUp = createAsyncThunk('auth/signUp', AuthService.signUp);

interface AuthState {
  register: {
    loading: boolean;
    success: boolean;
    error: SerializedError | null;
  };
  user: User | null;
}

const initialState: AuthState = {
  register: {
    loading: false,
    success: false,
    error: null,
  },
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending.type]: state => {
      state.register = {
        loading: true,
        success: false,
        error: null,
      };
    },
    [signUp.fulfilled.type]: state => {
      state.register.loading = false;
      state.register.success = true;
    },
    [signUp.rejected.type]: (
      state,
      action: ReturnType<typeof signUp.rejected>,
    ) => {
      state.register.error = action.error;
      state.register.loading = false;
    },
  },
});

export default authSlice.reducer;
