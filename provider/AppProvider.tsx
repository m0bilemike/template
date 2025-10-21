// AppProvider.tsx
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppInitializer } from '@/components/AppInitializer';
import { persistor, store } from '@/store';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" />} persistor={persistor}>
        <AppInitializer />
        {children}
      </PersistGate>
    </Provider>
  );
};