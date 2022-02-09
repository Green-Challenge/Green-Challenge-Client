import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChallengeService} from 'service/challenges/challenges';
import {ChallengeDetailRes, ChallengesRes} from 'service/challenges/type';
import {
  FetchThunkData,
  getInitialState,
  InitialStateById,
} from 'utils/reduxUtils';
import {ChallengeStateType} from './type';

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
    challengeId: null as null | number,
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
  reducers: {
    startChallenge(state, action: PayloadAction<ChallengeStateType>) {
      state.challenging.isStart = true;
      state.challenging.challengeId = action.payload.challengeId;
    },
    stopChallenge(state) {
      state.challenging.isStart = false;
      state.challenging.challengeId = null;
    },
  },
  extraReducers: builder => {
    fetchChallengeKeepDataNoHandler.getFetchThunkReducer(builder);
    fetchChallengeDetailKeepDataNoHandler.getFetchThunkReducerById(builder);
  },
});

export default challengesSlice.reducer;
export const {startChallenge, stopChallenge} = challengesSlice.actions;
