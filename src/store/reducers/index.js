import { combineReducers } from 'redux';
import { todoReducer } from './todos-reducer';

export const rootReducer = combineReducers({ todoReducer });
