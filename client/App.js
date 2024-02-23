import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './Navigation/AppNavigator';
import { DarkModeProvider } from './Context/DarkModeContext';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DarkModeProvider>
          <AppNavigator />
        </DarkModeProvider>
      </NavigationContainer>
    </Provider>
  );
}


