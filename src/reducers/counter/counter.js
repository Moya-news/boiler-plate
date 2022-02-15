import produce from "../../util/produce";
import { INCREASE_REQUEST_ACTION } from "./actionType";

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREASE_REQUEST_ACTION:
        draft.count = draft.count + action.data;
        break;
      default:
        break;
    }
  });

export default counter;
