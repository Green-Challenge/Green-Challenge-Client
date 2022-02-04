import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ChallengeService} from 'service/challenges/challenges';
import {ChallengesRes} from 'service/challenges/type';
import {fetchThunk, getInitialState} from 'utils/reduxUtils';

export const fetchChallenges = createAsyncThunk(
  'challenges/fetchChallenges',
  ChallengeService.getChallenges,
);

const initialState = {
  challenges: getInitialState<ChallengesRes>(),
};

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers: fetchThunk<ChallengesRes, typeof initialState>(
    fetchChallenges,
    'challenges',
    true,
  ),
});

export default challengesSlice.reducer;
