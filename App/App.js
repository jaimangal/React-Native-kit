
import React from 'react';
import { Provider } from "react-redux";
import createStore from "./Store";
import RootScreen from "./Screens/Root/RootScreen";

const { store } = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );
  }
}
