import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChallengeService} from 'service/challenges/challenges';
import {ChallengeDetailRes, ChallengesRes} from 'service/challenges/type';
import {
  FetchThunkData,
  getInitialState,
  InitialStateById,
} from 'utils/reduxUtils';

export const fetchChallenges = createAsyncThunk(
  'challenges/fetchChallenges',
  ChallengeService.getChallenges,
);

export const fetchChallengeDetail = createAsyncThunk(
  'challenges/fetchChallengeDetail',
  ChallengeService.getChallengeDetail,
);

const challengeDetail: InitialStateById<ChallengeDetailRes> = {};

const initialState = {
  challenges: getInitialState<ChallengesRes>(),
  challengeDetail,
  challenging: {
    isStart: false,
    challengeId: '',
  },
};

const fetchChallengeKeepDataNoHandler = new FetchThunkData({
  fetch: fetchChallenges,
  keep: true,
  key: 'challenges',
});

const fetchChallengeDetailKeepDataNoHandler = new FetchThunkData({
  fetch: fetchChallengeDetail,
  keep: true,
  key: 'challengeDetail',
});

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers: builder => {
    fetchChallengeKeepDataNoHandler.getFetchThunkReducer(builder);
    fetchChallengeDetailKeepDataNoHandler.getFetchThunkReducerById(builder);
  },
});

export default challengesSlice.reducer;
