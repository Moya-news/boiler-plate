import React, { useRef } from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import Example from "./components/example";
import GlobalStyle from "./GlobalStyle";
import configureStore from "./store";

const store = configureStore();
const App = () => {
  const exampleMessage = "Hello World";
  return (
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <Example exampleMessage={exampleMessage} />
      </Provider>
    </React.StrictMode>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
