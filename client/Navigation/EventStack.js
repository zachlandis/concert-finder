import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Events from '../Events/Events';
import EventPage from '../Events/EventPage'; 

const Stack = createStackNavigator();

function EventStack() {
  return (
    <Stack.Navigator initialRouteName="EventsOverview" >
      <Stack.Screen name='Browse Events' component={Events} />
      <Stack.Screen name='EventPage' component={EventPage} />
    </Stack.Navigator>
  );
}

export default EventStack;
