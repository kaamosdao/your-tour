import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    showHeader: (state) => {
      state.isShow = true;
    },
    hideHeader: (state) => {
      state.isShow = false;
    },
  },
});

export const { showHeader, hideHeader } = headerSlice.actions;

export default headerSlice.reducer;
