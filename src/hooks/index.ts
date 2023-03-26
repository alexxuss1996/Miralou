import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';

// Define a typed version of the useSelector hook that uses our RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Define the useAppDispatch hook that returns our AppDispatch type
export const useAppDispatch = () => useDispatch<AppDispatch>();
