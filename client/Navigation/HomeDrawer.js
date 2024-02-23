import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawerSettings from '../HomeDrawerSettings';
import Home from '../Home/Home';

function HomeDrawer() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home Drawer Settings' component={HomeDrawerSettings} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HomeDrawer;
