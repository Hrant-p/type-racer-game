import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Map } from 'immutable';
import reducer from './reducers';
import middleware from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const allMiddlewares = [sagaMiddleware];

const store = createStore(
  reducer,
  Map(),
  composeWithDevTools(applyMiddleware(...allMiddlewares)),
);

sagaMiddleware.run(middleware);

export default store;
