import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Main from './Main';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator >
        <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
        <Stack.Screen name='Main' options={{ headerShown: false }} component={Main} />
    </Stack.Navigator>
  )
}

export default AppNavigator