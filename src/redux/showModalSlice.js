import { createSlice } from '@reduxjs/toolkit';

const showModalSlice = createSlice({
  name: 'showModal',
  initialState: false,
  reducers: {
    setShowModal(state, _) {
      return (state = !state);
    },
  },
});

export const modalReducer = showModalSlice.reducer;
export const { setShowModal } = showModalSlice.actions;