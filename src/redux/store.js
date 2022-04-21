import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import Apis from '../apis';
import Service from '../service';
import {composeWithDevTools} from 'redux-devtools-extension';
import {configureStore} from '@reduxjs/toolkit';

const apis = new Apis();
const service = new Service({apis});

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {extraArgument: {service}},
      logger: true,
    }),
  devTools: true,
});
// export default store;
