import { configureStore } from '@reduxjs/toolkit';

import headerReducer from './headerSlice.js';

export default configureStore({
  reducer: {
    header: headerReducer,
  },
});
