import React from "react";
import PropTypes from "prop-types";
import { ExampleWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "@reducers/counter/actionType";
import dummy from "@images/dummy.png";
// 이미지를 모듈처럼 불러올 수 있습니다.

const Example = ({ exampleMessage }) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const onClickButton = () => {
    dispatch(increaseCount(1));
  };
  return (
    <ExampleWrapper>
      <div className="count_holder">{count}</div>
      <div>
        <button onClick={onClickButton}>누르면 카운트가 증가해요</button>
      </div>
      <img src={dummy} />
      <div>{exampleMessage}</div>
    </ExampleWrapper>
  );
};

// Typescript를 적용하지 않은 대신 propTypes를 사용하여 안정성을 더했습니다.
// prop:PropsTypes.type 의 형태로 사용해주시면 됩니다.

Example.propTypes = {
  exampleMessage: PropTypes.string.isRequired,
};

export default Example;
