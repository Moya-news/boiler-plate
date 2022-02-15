import React from "react";
import PropTypes from "prop-types";
import { ExampleDiv } from "./style";
const Example = ({ exampleMessage }) => {
  return <ExampleDiv>{exampleMessage}</ExampleDiv>;
};

Example.propTypes = {
  exampleMessage: PropTypes.string,
};

export default Example;
