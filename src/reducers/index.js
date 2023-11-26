import {combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import {reservationsReducer} from './reservationsReducer'

export const reducers = combineReducers({
    userReducer,cartReducer,reservationsReducer
});