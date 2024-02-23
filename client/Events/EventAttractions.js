import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import { useDarkMode } from '../Context/DarkModeContext';

function EventAttractions({ event }) {
    const { darkModeView } = useDarkMode();
    const attractionsDisplay = event._embedded?.attractions?.map((attraction, index) => (
    <Text style={darkModeView ? styles.darkMode.greenText : styles.lightMode.greenText} key={index}>{attraction.name} </Text>
  ));

  return (
    <View style={darkModeView ? styles.darkMode.attractionsContainer : styles.lightMode.attractionsContainer}>
      {attractionsDisplay}
    </View>
  );
}

export default EventAttractions

const styles = StyleSheet.create({
    lightMode: {
      greenText: {
        color: '#000',
        fontSize: 14,
      },
      attractionsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
      },
    },
    darkMode: {
      greenText: {
        fontSize: 14,
        color: '#beffb5',
      },
      attractionsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
      },
    }
  })