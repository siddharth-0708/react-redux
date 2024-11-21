import {createStore} from 'redux';
import storeReducer from './storeReducer';

export const store = createStore(storeReducer);