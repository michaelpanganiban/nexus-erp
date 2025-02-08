import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import authSlice from './features/auth/authSlice';
import geographicSlice from './features/geographic/geographicSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    geographics: geographicSlice
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;