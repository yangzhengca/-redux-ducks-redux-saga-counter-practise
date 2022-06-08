import { combineReducers, createStore, applyMiddleware } from "redux";
import counterReducer from "./ducks/counter"
import userReducer from "./ducks/user";

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store;
