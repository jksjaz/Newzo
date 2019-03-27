import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import createSagaMiddleware from "redux-saga"

import movieReducer from "../reducers/movieReducer"
import {watcherSaga} from "../sagas/saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        movieData: movieReducer
    }),
    compose(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(watcherSaga)

export default store