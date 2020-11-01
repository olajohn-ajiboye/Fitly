import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { RootState } from '../../app/rootReducer';
import { addFast_insert_fitly_fast_one } from '../../graphql/mutations/types/addFast';

export type Fast = Omit<addFast_insert_fitly_fast_one, '__typename' | 'id'>;

const initialState: { fast: Fast } = {
  fast: {
    end_time: '2020-10-31T22:44:10.35273',
    feeling: 'HAPPYLIKS',
    start_time: '2020-10-31T22:44:10.35273',
    user_id: '2020-10-31T22:44:10.35273',
  },
};

export const fastSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addNewFast: (state, action: PayloadAction<Fast>) => {
      state.fast = action.payload;
    },
  },
});

export const { addNewFast } = fastSlice.actions;

export const addFastAsync = (
  payload: addFast_insert_fitly_fast_one
): AppThunk => async (dispatch) => {
  try {
    const feelingUpdate = {
      ...payload,
      feeling: 'SADDEST',
      start_time: 'Today',
    };
    dispatch(addNewFast(feelingUpdate));
  } catch (error) {
    console.log(error);
  }
};

export const fastData = (state: RootState) => state.dayData.fast;

export default fastSlice.reducer;
