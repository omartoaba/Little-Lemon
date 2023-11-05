import {legacy_createStore as createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { reducers } from '../reducers';

export const userStore = createStore(reducers,
    compose(applyMiddleware(thunk)));;