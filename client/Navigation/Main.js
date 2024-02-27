import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home/Home';
import EventStack from './EventStack';
// import OnSale from '../Feed/OnSale';

const Tab = createBottomTabNavigator();

function Main() {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Events' component={EventStack} />
        {/* <Tab.Screen name="Feed" component={OnSale} /> */}
    </Tab.Navigator>
    
  )
}

export default Main