import {combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';

export const reducers = combineReducers({
    userReducer,cartReducer
});