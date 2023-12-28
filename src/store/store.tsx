import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './userActions/reducers';

const store = configureStore({reducer:rootReducer});

export default store;
