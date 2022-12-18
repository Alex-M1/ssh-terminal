import { AppState } from 'types/storeTypes';

export const countSelector = (state: AppState) => state.counter.value;
export const amountSelector = (state: AppState) => state.counter.incrementAmount;
