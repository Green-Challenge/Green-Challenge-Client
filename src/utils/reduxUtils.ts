import {AsyncThunk, PayloadAction, SerializedError} from '@reduxjs/toolkit';

export interface InitialState<S> {
  loading: boolean;
  data: S | null;
  error: SerializedError | null;
}

export function getInitialState<T>(): InitialState<T> {
  return {
    loading: false,
    data: null,
    error: null,
  };
}

export function fetchThunk<T, I extends {[key: string]: InitialState<T>}>(
  fetch: AsyncThunk<T, string, {}>,
  key: keyof I,
  keep: boolean,
  handler?: (state: I, action: PayloadAction<T>) => void,
) {
  return {
    [fetch.pending.type]: (state: I) => {
      state[key].loading = true;
      state[key].data = keep ? state[key].data : null;
      state[key].error = null;
    },
    [fetch.fulfilled.type]: (state: I, action: PayloadAction<T>) => {
      state[key].loading = false;
      state[key].data = action.payload;
      handler && handler(state, action);
    },
    [fetch.rejected.type]: (
      state: I,
      action: ReturnType<typeof fetch.rejected>,
    ) => {
      state[key].loading = false;
      state[key].error = action.error;
    },
  };
}
