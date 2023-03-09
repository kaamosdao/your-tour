import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShow = true;
    },
    hideModal: (state) => {
      state.isShow = false;
    },
  },
});

export const { showModal, hideModal } = headerSlice.actions;

export default headerSlice.reducer;
