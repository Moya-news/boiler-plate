import React from "react";
import PropTypes from "prop-types";
import { ExampleDiv } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../../reducers/counter/actionType";
const Example = ({ exampleMessage }) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const onClickButton = () => {
    dispatch(increaseCount(1));
  };
  return (
    <ExampleDiv>
      <div>{count}</div>
      <div>
        <button onClick={onClickButton}>누르면 카운트가 증가해요</button>
      </div>
      <div>{exampleMessage}</div>
    </ExampleDiv>
  );
};

Example.propTypes = {
  exampleMessage: PropTypes.string,
};

export default Example;
