import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { UserAdd } from "./application/PageUser/UserAdd";
import { UserList } from "./application/PageUser/UserList";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <UserAdd />
      <br />
      <br />
      <UserList />
    </Provider>
  );
}

export default App;
