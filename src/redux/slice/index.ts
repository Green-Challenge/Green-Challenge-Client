import {combineReducers} from 'redux';
import auth from './auth/auth';
import challenges from './challenges/challenges';

const rootReducer = combineReducers({
  auth,
  challenges,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
