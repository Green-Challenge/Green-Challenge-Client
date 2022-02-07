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

type FetchThunkDataConstructor<T, S> = {
  fetch: AsyncThunk<T, string, {}>;
  keep: boolean;
  key: string;
  handler?: (state: S, action: PayloadAction<T>) => void;
};

export class FetchThunkData<T, S extends {[key: string]: InitialState<T>}> {
  private fetch: AsyncThunk<T, string, {}>;
  private keep: boolean;
  private key: string;
  private handler?: (state: S, action: PayloadAction<T>) => void;

  constructor({fetch, keep, key, handler}: FetchThunkDataConstructor<T, S>) {
    this.fetch = fetch;
    this.keep = keep;
    this.key = key;
    this.handler = handler;
  }

  private pendingReducer = (state: S) => {
    state[this.key].data = this.keep ? state[this.key].data : null;
    state[this.key].loading = true;
    state[this.key].error = null;
  };

  private fuflledReducer = (state: S, action: PayloadAction<T>) => {
    state[this.key].loading = false;
    state[this.key].data = action.payload;
    this.handler && this.handler(state, action);
  };

  private rejectedReducer = (
    state: S,
    action: ReturnType<typeof this.fetch.rejected>,
  ) => {
    state[this.key].loading = false;
    state[this.key].error = action.error;
  };

  getFetchThunkReducer() {
    return {
      [this.fetch.pending.type]: this.pendingReducer,
      [this.fetch.fulfilled.type]: this.fuflledReducer,
      [this.fetch.rejected.type]: this.rejectedReducer,
    };
  }
}
