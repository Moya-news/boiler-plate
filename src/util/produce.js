import { produce } from "immer";

export default (...args) => {
  return produce(...args);
};
