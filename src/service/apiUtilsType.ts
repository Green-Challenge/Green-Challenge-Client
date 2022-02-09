export type ErrorType = {
  error: Error;
  message: string;
  timeStamp: Date;
};

export type ThunkApi = {
  rejectWithValue(error: ErrorType): any;
};
