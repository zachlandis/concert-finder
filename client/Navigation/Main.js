import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home';
import EventStack from './EventStack';

const Tab = createBottomTabNavigator();

function Main() {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Events' component={EventStack} />
    </Tab.Navigator>
    
  )
}

export default Main