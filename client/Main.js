import React, {useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Events from './Events';

const Tab = createBottomTabNavigator();

function Main() {
  const [darkModeView, setDarkModeView] = useState(false)
  

  const toggleDarkMode = () => {
    setDarkModeView(!darkModeView)
    console.log("Dark Mode: ", darkModeView )
}

  const HomeScreen = () => <Home darkModeView={darkModeView} toggleDarkMode={toggleDarkMode} />;
  const EventsScreen = () => <Events darkModeView={darkModeView} toggleDarkMode={toggleDarkMode} />;


  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Events' component={EventsScreen} />
    </Tab.Navigator>
    
  )
}

export default Main