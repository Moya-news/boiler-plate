import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  INCREASE_REQUEST_ACTION,
  INCREASE_SUCCESS_ACTION,
  INCREASE_FAILURE_ACTION,
} from "../reducers/counter/actionType";

// function callAxios(data) {
//   return axios.
// }

function* increaseCountHandler(action) {
  try {
    console.log(action.data);
    yield delay(1000);
    yield put({
      type: INCREASE_SUCCESS_ACTION,
      data: action.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: INCREASE_FAILURE_ACTION,
      error,
    });
  }
}

function* watchIncreaseCounter() {
  yield takeLatest(INCREASE_REQUEST_ACTION, increaseCountHandler);
}

export default function* counterSaga() {
  yield all([fork(watchIncreaseCounter)]);
}
