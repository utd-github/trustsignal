import React from "react";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AppNavigator from "./navigation/AppNavigator";

import rootReducer from "./reducers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    // const store = createStore(rootReducer, applyMiddleware(thunk));

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return <AppNavigator />;
  }
}
