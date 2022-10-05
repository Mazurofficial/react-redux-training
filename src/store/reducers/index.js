import { combineReducers } from 'redux';
import { todoReducer } from './todos-reducer';
import { filters } from './filters-reducer';

export const rootReducer = combineReducers({ todoReducer, filters });
