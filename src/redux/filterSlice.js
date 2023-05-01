import { createSlice } from '@reduxjs/toolkit';

const myFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = myFilterSlice.reducer;
export const { filterChange } = myFilterSlice.actions;
