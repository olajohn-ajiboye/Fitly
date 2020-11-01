import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { RootState } from '../../app/rootReducer';
import { addFast_insert_fitly_fast_one } from '../../graphql/mutations/types/addFast';

export type Fast = Omit<addFast_insert_fitly_fast_one, '__typename' | 'id'>;

const initialState: { fast: Fast } = {
  fast: {
    end_time: '',
    feeling: '',
    start_time: '',
    user_id: '',
  },
};

export const dayDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addNewFast: (state, action: PayloadAction<Fast>) => {
      state.fast = action.payload;
    },
  },
});

export const { addNewFast } = dayDataSlice.actions;

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

export default dayDataSlice.reducer;
