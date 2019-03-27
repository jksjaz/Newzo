import { takeLatest, put, call } from "redux-saga/effects"

import { movieDis } from "../actions/actions"

import { fetchData } from "../api/api"

function* getData(action) {
    const data = yield call(fetchData, action.data.data)
    yield put(movieDis(data))
}

export function* watcherSaga() {
    yield takeLatest("MOVIE_RES", getData)
} 