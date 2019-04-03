import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen'

export default class App extends Component {
  render() {
    const MainNavigator = createStackNavigator({
      Main: { screen: MainScreen }
    })
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

