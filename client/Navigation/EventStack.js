import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Events from '../Events';
import EventPage from '../EventPage'; 

const Stack = createStackNavigator();

function EventStack() {
  return (
    <Stack.Navigator initialRouteName="EventsOverview">
      <Stack.Screen name='EventsOverview' component={Events} />
      <Stack.Screen name='EventPage' component={EventPage} />
    </Stack.Navigator>
  );
}

export default EventStack;
