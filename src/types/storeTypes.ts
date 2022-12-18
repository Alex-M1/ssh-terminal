import { Selector } from '@reduxjs/toolkit';
import { store } from 'src/store';

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppSelector<Result, Props = undefined> = Selector<AppState, Result, Props[]>;
