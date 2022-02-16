import produce from "@utils/produce";
import {
  INCREASE_REQUEST_ACTION,
  INCREASE_FAILURE_ACTION,
  INCREASE_SUCCESS_ACTION,
} from "./actionType";

// reducer의 초기 상태
const initialState = {
  increaseLoading: false,
  inreaseSuccess: true,
  inreaseError: null,
  count: 0,
};

const counter = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREASE_REQUEST_ACTION:
        draft.increaseLoading = true;
        draft.inreaseSuccess = false;
        draft.increaseError = null;
        break;
      case INCREASE_SUCCESS_ACTION:
        draft.increaseLoading = false;
        draft.inreaseSuccess = true;
        draft.count = draft.count + action.data;
        break;
      case INCREASE_FAILURE_ACTION:
        draft.increaseLoading = false;
        draft.inreaseSuccess = false;
        draft.increaseError = action.error;
        break;
      default:
        break;
    }
  });

export default counter;
