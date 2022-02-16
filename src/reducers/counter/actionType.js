// 액션 타입
export const INCREASE_REQUEST_ACTION = "INCREASE_REQUEST_ACTION";
export const INCREASE_SUCCESS_ACTION = "INCREASE_SUCCESS_ACTION";
export const INCREASE_FAILURE_ACTION = "INCREASE_FAILURE_ACTION";

// 액션 제너레이터
export const increaseCount = (data) => ({
  type: INCREASE_REQUEST_ACTION,
  data,
});
