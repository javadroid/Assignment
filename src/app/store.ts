import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import createFilter from "redux-persist-transform-filter";
import { UserSlice } from "../features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Define the persist filter
const saveUserOnlyFilter = createFilter('user', ['user']);

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  transforms: [saveUserOnlyFilter],
};

// Combine reducers
const rootReducer = combineReducers({
  user: UserSlice.reducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

// Export the persistor
export const persistor = persistStore(store);

// Type for the dispatch function
export type AppDispatch = typeof store.dispatch;

// Type for the root state
export type RootState = ReturnType<typeof rootReducer>;


// Custom hooks for useDispatch and useSelector with types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
