import React from 'react';
import { Provider } from 'react-redux';
// import store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './AppNavigator';


export default function App() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    // </Provider>
  );
}


