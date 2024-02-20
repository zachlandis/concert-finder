import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { useDarkMode } from './DarkModeContext';

function EventPage({ route }) {

  const { eventDetails } = route.params;
  const { darkModeView } = useDarkMode();


  const createPrettyDate = (date) => {
    const splitDate = date.split('-')
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }

  return (
    <ScrollView>
      <View style={darkModeView ? styles.darkMode.container : styles.lightMode.container}>
        <Image style={darkModeView ? styles.darkMode.image : styles.lightMode.image} source={{ uri: eventDetails.images?.[0]?.url}} />
        <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>{eventDetails.name}</Text>
        <Text style={darkModeView ? styles.darkMode.venue : styles.lightMode.venue}>{eventDetails._embedded.venues[0].name}</Text>
        <View style={darkModeView ? styles.darkMode.cityStateContainer : styles.lightMode.cityStateContainer}>
          <Text>{eventDetails._embedded.venues[0].city?.name}, </Text>
          <Text>{eventDetails._embedded.venues[0].state?.stateCode}</Text>
        </View>
        <Text style={darkModeView ? styles.darkMode.date : styles.lightMode.date}>{createPrettyDate(eventDetails.dates.start.localDate)}</Text>
      </View>
    </ScrollView>
  )
}

export default EventPage

const styles = StyleSheet.create({
  lightMode: {
    container: {
      flex: 1,
      margin: 10,
    },
    scrollView: {
      
    },
    image: {
      width: undefined,
      height: 300,
      resizeMode: 'cover', 
      borderRadius: 10,
    },
    textContainer: {
      flex: 2, 
      padding: 10, 
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5, 
    },
    venue: {
      fontWeight: 'bold'
    },
    date: {
      fontSize: 14,
    },
    cityStateContainer: {
      flexDirection: 'row',
    },
    pageNav: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: 10,
      color: '#000',
    },
    pageNavPageNum: {
      color: '#000',
    },
    searchBar: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      color: '#000',
      height: 40,
      borderWidth: 1,
      margin: 20,
      color: '#000',
    }, 
  },
  darkMode: {
    container: {
      flex: 1,
      margin: 10,
      padding: 10,
      backgroundColor: 'black',
    },
    scrollView: {
    },
    image: {
      width: undefined,
      height: 300,
      resizeMode: 'cover', 
      borderRadius: 10,
      borderColor: '#5a49a8',
      borderWidth: 2,
      marginBottom: 10,
    },
    textContainer: {
      flex: 2, 
      padding: 10, 
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5, 
      color: '#beffb5'
    },
    venue: {
      fontWeight: 'bold',
      color: '#3589d7',
    },
    date: {
      fontSize: 14,
      color: '#fff',
    },
    cityStateContainer: {
      flexDirection: 'row',
    },
    pageNav: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: 10,
      color: '#000',
    },
    pageNavPageNum: {
      color: '#000',
    },
    searchBar: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      color: '#000',
      height: 40,
      borderWidth: 1,
      margin: 20,
      color: '#000',
    }, 
  }
})