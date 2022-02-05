import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChallengeService} from 'service/challenges/challenges';
import {ChallengesRes} from 'service/challenges/type';
import {FetchThunkData, getInitialState} from 'utils/reduxUtils';

export const fetchChallenges = createAsyncThunk(
  'challenges/fetchChallenges',
  ChallengeService.getChallenges,
);

const initialState = {
  challenges: getInitialState<ChallengesRes>(),
};

const fetchThunkKeepDataNoHandler = new FetchThunkData({
  fetch: fetchChallenges,
  keep: true,
  key: 'challenges',
});

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers: fetchThunkKeepDataNoHandler.getFetchThunkReducer(),
});

export default challengesSlice.reducer;
