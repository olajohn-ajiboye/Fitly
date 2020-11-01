import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../features/auth';
import dayDataEntryReducer from '../features/dataEntry/dataEntrySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  dayData: dayDataEntryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
