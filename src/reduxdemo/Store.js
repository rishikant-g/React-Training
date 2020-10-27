import {applyMiddleware, combineReducers, createStore} from "redux"
import {AuthReducer} from "./AuthReducer";
import {ProductReducer} from "./ProductReducer";
import {CartReducer} from "./CartReducer";
import {OrderReducer} from "./OrderReducer";
import {RootSaga} from "./sagas"
import {loggerfunction} from "./logger"

import createSaga from "redux-saga"

var sagaMiddleware = createSaga(RootSaga);

var reducers = combineReducers({AuthReducer, ProductReducer, CartReducer, OrderReducer});
var store = createStore(reducers, applyMiddleware(loggerfunction, sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;