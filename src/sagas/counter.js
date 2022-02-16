import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  INCREASE_REQUEST_ACTION,
  INCREASE_SUCCESS_ACTION,
  INCREASE_FAILURE_ACTION,
} from "../reducers/counter/actionType";

// 제너레이터 함수를 사용하여 작성해주시면 됩니다.
// delay를 통해 비동기 호출을 임의로 재현해보았습니다.
// 실제 프로덕트를 만들 때는 이 부분에 api 호출로 데이터를 받아오도록 하면 됩니다.
// Handler를 붙여주셨으면 합니다.
function* increaseCountHandler(action) {
  try {
    console.log("before axios");
    yield delay(1000);
    console.log("after axios");
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
// takeLatest를 통해 제일 마지막 요청만 받고 이전의 요청은 무시하도록 하였습니다.
// 이 외에도 여러 effects를 제공합니다.
function* watchIncreaseCounter() {
  yield takeLatest(INCREASE_REQUEST_ACTION, increaseCountHandler);
}

// 액션들을 합쳐서 하나의 saga를 만듭니다.
export default function* counterSaga() {
  yield all([fork(watchIncreaseCounter)]);
}
