import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import { useDarkMode } from '../Context/DarkModeContext';


function EventAttractions({ event }) {
    const { darkModeView } = useDarkMode();
    const attractionsDisplay = event._embedded?.attractions?.map((attraction, index) => (
    <Text style={darkModeView ? styles.darkMode.greenText : styles.lightMode.greenText} key={index}>{attraction.name} </Text>
  ));

  const handlePress = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={darkModeView ? styles.darkMode.attractionsContainer : styles.lightMode.attractionsContainer}>
      {event._embedded?.attractions?.map((attraction, index) => (
        <View key={index} style={darkModeView ? styles.darkMode.attractionCard : styles.lightMode.attractionCard}>
        <Text style={darkModeView ? styles.darkMode.purpleText : styles.lightMode.purpleText} >{attraction.name} </Text>
        </View>
        ))}
    </View>
  );
}

export default EventAttractions

const styles = StyleSheet.create({
    lightMode: {
      purpleText: {
        color: '#000',
        fontSize: 18,
      },
      attractionsContainer: {
        marginBottom: 25,
      },
      attractionCard : {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 5,
        marginBottom: 5,
      },
    },
    darkMode: {
      purpleText: {
        fontSize: 18,
        color: '#5a49a8',
      },
      attractionsContainer: {
        marginBottom: 25,
      },
      attractionCard: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 5,
        marginBottom: 5,
      },
    }
  })