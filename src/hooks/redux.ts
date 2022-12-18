import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppSelector, AppState } from 'src/types/storeTypes';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = <Return, Props>(selector: AppSelector<Return, Props>, props?: Props) => (
  useSelector((state: AppState) => {
    if (props) return selector(state, props);
    return selector(state);
  })
);
