import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunk).concat(logger),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
