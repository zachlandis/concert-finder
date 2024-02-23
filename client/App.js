import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './Navigation/AppNavigator';
import { DarkModeProvider } from './Context/DarkModeContext';


export default function App() {
  return (
      <NavigationContainer>
        <DarkModeProvider>
          <AppNavigator />
        </DarkModeProvider>
      </NavigationContainer>
  );
}


