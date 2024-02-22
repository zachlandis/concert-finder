import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawerSettings from './HomeDrawerSettings';

function HomeDrawer() {

    const Drawer = createDrawerNavigator();

  return (
        <Drawer.Navigator>
            <Drawer.Screen name='HomeDrawerSettings' component={HomeDrawerSettings} />
        </Drawer.Navigator>
    
  )
}

export default HomeDrawer