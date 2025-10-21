import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import appUsageReducer from './appUsageSlice';
import themeReducer from "./themeSlice";

const rootReducer = combineReducers({
  appUsage: appUsageReducer,
  theme: themeReducer 
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['appUsage', 'theme'],
};

// 3️⃣ Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this off for non-serializable values
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// 5️⃣ Persistor
export const persistor = persistStore(store);

// 6️⃣ Types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;