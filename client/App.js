import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './Navigation/AppNavigator';
import { DarkModeProvider } from './DarkModeContext';


export default function App() {
  return (
      <DarkModeProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
    </DarkModeProvider>
  );
}


