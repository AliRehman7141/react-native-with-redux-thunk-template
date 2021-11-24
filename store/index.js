//Config for redux globel store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const preloadedState = {};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middleware = compose(applyMiddleware(thunk))
const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducers, preloadedState, middleware)
export const persistor = persistStore(store);