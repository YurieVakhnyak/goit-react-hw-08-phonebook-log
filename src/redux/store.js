import {
  // getDefaultMiddleware,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
// import {
//   // persistReducer,
//   // persistStore,

//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const myMiddleware = store => next => action => {
//   console.log('My middleware!', action);
//   // next(action);
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   myMiddleware,
// ];

export const rootReducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: rootReducers,
  // middleware,
});

// export const persistor = persistStore(store);
