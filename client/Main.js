import React, {useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Events from './Events';
import EventStack from './EventStack';

const Tab = createBottomTabNavigator();

function Main() {

  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Events' component={EventStack} />
    </Tab.Navigator>
    
  )
}

export default Main