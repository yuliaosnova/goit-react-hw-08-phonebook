import { createSlice } from '@reduxjs/toolkit';

const showEditModalSlice = createSlice({
  name: 'showEditModal',
  initialState: false,
  reducers: {
	setShowEditModal(state, _) {
      return (state = !state);
    },
  },
});

export const modalEditReducer = showEditModalSlice.reducer;
export const { setShowEditModal } = showEditModalSlice.actions;