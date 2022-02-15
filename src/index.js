import React, { useRef } from "react";
import reactDOM from "react-dom";
import Hi from "./components/example";
import GlobalStyle from "./GlobalStyle";
import "./style.css";

const App = () => {
  const exampleMessage = "Hello World";
  return (
    <>
      <GlobalStyle />
      <Hi exampleMessage={exampleMessage} />
    </>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
