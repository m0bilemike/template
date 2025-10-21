import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import appUsageReducer, { AppUsageState } from '../../store/appUsageSlice';
import { AppInitializer } from '../AppInitializer';

// Create a fresh store for each test
const createTestStore = (preloadedState?: { appUsage: AppUsageState }) =>
    configureStore({
      reducer: {
        appUsage: appUsageReducer,
      },
      preloadedState,
    });


  describe('AppInitializer', () => {
    it('increments streak correctly if opened on consecutive days', () => {
      // Simulate yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
  
      const store = createTestStore({
        appUsage: {
          totalOpens: 1,
          lastOpenDate: yesterdayStr,
          streak: 1,
        },
      });
  
      render(
        <Provider store={store}>
          <AppInitializer />
        </Provider>
      );
  
      const state = store.getState().appUsage;
      expect(state.totalOpens).toBe(2); // incremented
      expect(state.streak).toBe(2); // streak incremented
    });
  });