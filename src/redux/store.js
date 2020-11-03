import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middleware = [sagaMiddleware];

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  if (typeof devTool === 'function') {
    enhancers.push(devTool());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, composedEnhancers);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
