import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView, Button, Linking} from 'react-native'
import { useDarkMode } from './DarkModeContext';
import EventProducts from './EventProducts';
import EventAttractions from './EventAttractions';

function EventPage({ route }) {

  const { eventDetails } = route.params;
  const { darkModeView } = useDarkMode();

  const createPrettyDate = (date) => {
    const splitDate = date.split('-')
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }

  const createPrettyTime = (militaryTime) => {
    const splitTime = militaryTime.split(':')
    if (splitTime[0] > 12) {
      return `${splitTime[0] - 12}:${splitTime[1]} PM`
    } else {
      return `${militaryTime} AM`
    }
  }

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
    <ScrollView>
      <View style={darkModeView ? styles.darkMode.container : styles.lightMode.container}>
        
        {/* Event Image */}
        <Image style={darkModeView ? styles.darkMode.image : styles.lightMode.image} source={{ uri: eventDetails.images?.[0]?.url}} />
        
        {/* Event Title */}
        <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>{eventDetails.name}</Text>

        {/* Event Attractions */}
        {/* <View style={darkModeView ? styles.darkMode.container : styles.lightMode.container}> */}
          <EventAttractions event={eventDetails}/>
        {/* </View> */}
        
        {/* Event Venue */}
        <Text style={darkModeView ? styles.darkMode.subheader : styles.lightMode.subheader}>{eventDetails._embedded.venues[0].name}</Text>
        
        {/* Event City/State */}
        <View style={darkModeView ? styles.darkMode.cityStateContainer : styles.lightMode.cityStateContainer}>
          <Text style={darkModeView ? styles.darkMode.subtitle : styles.lightMode.subtitle}>{eventDetails._embedded.venues[0].city?.name}</Text>
          {eventDetails._embedded.venues[0].state && 
            <Text style={darkModeView ? styles.darkMode.subtitle : styles.lightMode.subtitle}>, {eventDetails._embedded.venues[0].state?.stateCode}</Text>
          }          
          {eventDetails._embedded.venues[0].country.countryCode !== 'US' && 
            <Text style={darkModeView ? styles.darkMode.subtitle : styles.lightMode.subtitle}>, {eventDetails._embedded.venues[0].country?.name}</Text>
          }
        </View>
        
        {/* Event Date/Time */}
        <View style={darkModeView ? styles.darkMode.dateTimeContainer : styles.lightMode.dateTimeContainer}>
        
          {/* Date */}
          <Text style={darkModeView ? styles.darkMode.whiteText : styles.lightMode.whiteText}>{createPrettyDate(eventDetails.dates.start.localDate)}</Text>

          {/* Time */}
          {eventDetails.dates.start.localTime ? 
          <Text style={darkModeView ? styles.darkMode.whiteText : styles.lightMode.whiteText}> || {createPrettyTime(eventDetails.dates.start.localTime)}</Text>
          : null }
        </View>

        <View>
          <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Price Range</Text>
        </View>
        {eventDetails.priceRanges ? 
          <View>
            <Text style={darkModeView ? styles.darkMode.whiteText : styles.lightMode.whiteText}>
              ${eventDetails.priceRanges[0]["min"]} - ${eventDetails.priceRanges[0].max}</Text>
          </View>
        : null}

        <View style={darkModeView ? styles.darkMode.buyTickets : styles.lightMode.buyTickets}>
          <Button 
            
            title='Buy Tickets' 
            onPress={() => handlePress(eventDetails.url)}
          />
        </View>

        <View>
            <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Products and Add-Ons</Text>
        </View>
        {eventDetails.products ? 
        <View>
          <EventProducts eventDetails={eventDetails} onHandlePress={handlePress}/>
        </View>
        : 
        <View>
          <Text style={darkModeView ? styles.darkMode.whiteText : styles.lightMode.whiteText}>This event doesn't have any products or add-ons.</Text>
        </View>
        }
        
        {/* Event Details */}
        <View>
          <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Event Details</Text>
        </View>
        {eventDetails.info ?
        <View>
          <Text style={darkModeView ? styles.darkMode.whiteText : styles.lightMode.whiteText}>{eventDetails.info}</Text>
        </View>
        : 
        <View>
          <Text style={darkModeView ? styles.darkMode.whiteText : styles.lightMode.whiteText}>This event doesn't have any details</Text>
        </View>  
        }
      </View>
    </ScrollView>
  )
}

export default EventPage

const styles = StyleSheet.create({
  lightMode: {
    container: {
      padding: 20,
    },
    scrollView: {
      
    },
    image: {
      width: undefined,
      height: 300,
      resizeMode: 'cover', 
      borderRadius: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    subtitle: {
      fontWeight: 'bold'
    },
    dateTimeContainer: {
      flexDirection: 'row',
      marginBottom: 25,
    },
    whiteText: {
      color: '#000',
      fontSize: 14,
      marginBottom: 10,
    },
    cityStateContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    buyTickets: {
      borderColor: '#3589d7',
      borderWidth: 1,
      margin: 15,
    },
  },
  darkMode: {
    container: {
      padding: 20,
      backgroundColor: 'black',
    },
    scrollView: {
      backgroundColor: '#000'
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
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#beffb5'
    },
    subtitle: {
      fontWeight: 'bold',
      color: '#3589d7',
    },
    dateTimeContainer: {
      flexDirection: 'row',
      marginBottom: 25,
    },
    whiteText: {
      fontSize: 14,
      color: '#FFF',
      marginBottom: 10,
    },
    cityStateContainer: {
      flexDirection: 'row',
      marginBottom: 10, 
    },
    buyTickets: {
      borderColor: '#5a49a8',
      borderWidth: 1,
      margin: 15,
      color: '#5a49a8',
    },
  }
})