import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import AppReducers from './index';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [
		
	],
}

const persistedReducer = persistReducer(persistConfig, AppReducers)

export default () => {
	let store = createStore(persistedReducer)
	let persistor = persistStore(store)
	return { store, persistor }
}