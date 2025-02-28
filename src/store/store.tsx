import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import authSlice from './features/auth/authSlice';
import geographicSlice from './features/geographic/geographicSlice';
import modalSlice from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    geographics: geographicSlice,
    modal: modalSlice
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;