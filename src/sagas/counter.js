import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  INCREASE_REQUEST_ACTION,
  INCREASE_SUCCESS_ACTION,
  INCREASE_FAILURE_ACTION,
} from "../reducers/counter/actionType";

// 제너레이터 함수를 사용하여 작성해주시면 됩니다.
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

// 해당 액션의 발생을 감지하는 함수입니다.
function* watchIncreaseCounter() {
  yield takeLatest(INCREASE_REQUEST_ACTION, increaseCountHandler);
}

// 액션들을 합쳐서 하나의 saga를 만듭니다.
export default function* counterSaga() {
  yield all([fork(watchIncreaseCounter)]);
}
