import React from "react";
import List from "./components/List";
import { Provider } from "react-redux";
import * as redux from "redux";
import { rootReducer } from "./reducers/reducer";

const store = redux.createStore(
  rootReducer,
  redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};

export default App;
