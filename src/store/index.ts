import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/slice';
import { githubApi } from './example/api';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});
