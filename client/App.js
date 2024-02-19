import React from 'react';
import { Provider } from 'react-redux';
// import store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './AppNavigator';
// import { DarkModeProvider } from './Context/DarkModeContext';


export default function App() {
  return (
    // <Provider store={store}>
    // <DarkModeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    // </DarkModeProvider>
    // </Provider>
  );
}


