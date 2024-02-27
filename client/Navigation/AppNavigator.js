import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Auth/Login';
import Main from './Main';
import Registration from '../Auth/Registration';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='Main' component={Main} />
    </Stack.Navigator>
  )
}

export default AppNavigator