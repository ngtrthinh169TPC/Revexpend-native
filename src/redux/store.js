/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducer from "./reducers";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});
export const persistor = persistStore(store);
