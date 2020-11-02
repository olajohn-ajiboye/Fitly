import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { RootState } from '../../app/rootReducer';
import { addFast_insert_fitly_fast_one } from '../../graphql/mutations/types/addFast';

export type Fast = Omit<addFast_insert_fitly_fast_one, '__typename' | 'id'>;
interface DayData {
  fast: Fast;
  weight: number;
}

const initialState: DayData = {
  fast: {
    end_time: '',
    feeling: '',
    start_time: '',
    user_id: '',
  },
  weight: 90,
};

export const dayDataSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addNewFast: (state, action: PayloadAction<Fast>) => {
      state.fast = action.payload;
    },
    addNewWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    updateWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    getCurrentWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
  },
});

export const {
  addNewFast,
  addNewWeight,
  getCurrentWeight,
} = dayDataSlice.actions;

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

export const addWeightAsync = (payload: number): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(addNewWeight(payload));
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentWeightAsync = (
  payload: number | undefined | null
): AppThunk => async (dispatch) => {
  try {
    dispatch(getCurrentWeight(payload ?? initialState.weight));
  } catch (error) {
    console.log(error);
  }
};

export const fastData = (state: RootState) => state.dayData.fast;
export const weight = (state: RootState) => state.dayData.weight;

export default dayDataSlice.reducer;
