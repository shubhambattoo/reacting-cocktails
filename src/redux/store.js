import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();
const devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middleware = [sagaMiddleware, thunk];

const enhancers = [];

if (process.env.NODE_ENV === "development") {
  if (typeof devTool === "function") {
    enhancers.push(devTool());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, composedEnhancers);

export default store;
