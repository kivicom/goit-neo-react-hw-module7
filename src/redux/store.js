import { configureStore } from '@reduxjs/toolkit';
import { contactsPersistedReducer } from './contactsSlice';
import { persistStore } from 'redux-persist';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
