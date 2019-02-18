import React, { Component } from "react";
import { Provider } from "react-redux";
import { View, SafeAreaView } from "react-native";

import "./config/ReactotronConfig";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <SafeAreaView>
      <View />
    </SafeAreaView>
  </Provider>
);

export default App;
