import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Events from './Events';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Events' component={Events} />
    </Tab.Navigator>
    
  )
}

export default Main