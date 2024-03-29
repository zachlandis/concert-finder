import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import {View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from '../Context/DarkModeContext';
import EventsFilter from '../Filters/EventsFilter';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchMusicEvents } from '../Redux/Actions/getEventsActions';



function Events() {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [filter, setFilter] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [radius, setRadius] = useState('')
  const [city, setCity] = useState('')
  const [stateCode, setStateCode] = useState('')
  const [countryCode, setCountryCode] = useState('US')
  const [genre, setGenre] = useState('')
  const nav = useNavigation();
  const { darkModeView } = useDarkMode();
  const dispatch = useDispatch();

  const musicEvents = useSelector((state) => state.events.events)
  const totalPages = useSelector((state) => state.events.totalPages)
  
  useEffect(() => {
    dispatch(fetchMusicEvents(currentPage, filter, stateCode, city, genre, countryCode))
  }, [dispatch, currentPage, filter, stateCode, city, genre, countryCode])  

  const handlePageChange = (direction) => {
    const newPage = direction === '➡️' ? currentPage + 1 : currentPage - 1;
    setCurrentPage(newPage);
    fetchMusicEvents(newPage); 
  };

  const createPrettyDate = (date) => {
    const splitDate = date.split('-')
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }
  

  return (
    <View style={darkModeView ? styles.darkMode.container : styles.lightMode.container}> 
      <View style={[styles.filterButtonContainer, darkModeView ? styles.darkMode.filterButtonContainer : styles.lightMode.filterButtonContainer]}>
      <TouchableOpacity onPress={() => setDisplayFilter(!displayFilter)}>
        <Icon 
          name={displayFilter ? 'times' : 'filter'} 
          size={30} 
          color={darkModeView ? 'white' : 'black'} 
        />
      </TouchableOpacity>
      </View>
      {displayFilter ? 
      <View >
          <ScrollView>
            <EventsFilter 
              filter={filter} 
              setFilter={setFilter} 
              postalCode={postalCode} 
              setPostalCode={setPostalCode} 
              radius={radius}
              setRadius={setRadius}
              city={city}
              setCity={setCity}
              stateCode={stateCode}
              setStateCode={setStateCode}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              genre={genre}
              setGenre={setGenre}
            />
          </ScrollView>
        </View>
      : null}
      
      <View style={darkModeView ? styles.darkMode.pageNav : styles.lightMode.pageNav}> 
        <Button title='⬅️' onPress={() => handlePageChange('⬅️')} />
        <Text style={darkModeView ? styles.darkMode.pageNavPageNum : styles.lightMode.pageNavPageNum}>Page: {currentPage + 1}/{totalPages}</Text>
        <Button title='➡️' onPress={() => handlePageChange('➡️')} />
      </View>
      <ScrollView style={darkModeView ? styles.darkMode.scrollView : styles.lightMode.scrollView}>
      {musicEvents.map((e) => (
        <TouchableOpacity
          key={e.id}
          style={darkModeView ? styles.darkMode.eventContainer : styles.lightMode.eventContainer}
          onPress={() => nav.navigate('EventPage', { eventDetails: e })}
        >
          <Image source={{ uri: e.images?.[0]?.url || 'default_image_uri' }} style={darkModeView ? styles.darkMode.image : styles.lightMode.image} />
          <View style={darkModeView ? styles.darkMode.textContainer : styles.lightMode.textContainer}>
            <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>{e.name}</Text>
            <View>
              <Text style={darkModeView ? styles.darkMode.venue : styles.lightMode.venue}>{e._embedded.venues[0].name}</Text>
              <View style={darkModeView ? styles.darkMode.cityStateContainer : styles.lightMode.cityStateContainer}>
                <Text style={darkModeView ? styles.darkMode.subtitle : styles.lightMode.subtitle}>{e._embedded.venues[0].city?.name}</Text>
                {e._embedded.venues[0].state && 
                  <Text style={darkModeView ? styles.darkMode.subtitle : styles.lightMode.subtitle}>, {e._embedded.venues[0].state?.stateCode}</Text>
                }
                {e._embedded.venues[0].country.countryCode !== 'US' && 
                  <Text style={darkModeView ? styles.darkMode.subtitle : styles.lightMode.subtitle}>, {e._embedded.venues[0].country?.name}</Text>
                }
              </View>
            </View>
            <Text style={darkModeView ? styles.darkMode.date : styles.lightMode.date}>{createPrettyDate(e.dates.start.localDate)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  lightMode: {
    container: {
      flex: 1,
      paddingTop: 50,
    },
    scrollView: {
      
    },
    eventContainer: {
      flexDirection: 'row', 
      backgroundColor: 'white',
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      margin: 5,
      shadowColor: 'black'
    },
    image: {
      flex: 1, 
      width: undefined,
      height: 100,
      resizeMode: 'cover', 
      margin: 10,
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
    subtitle: {
      fontSize: 16,
      marginBottom: 5, 
      color: '#000',
    },
    venue: {
      fontWeight: 'bold'
    },
    date: {
      fontSize: 14,
    },
    cityStateContainer: {
      flex: 1,
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
  },
  darkMode: {
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    scrollView: {
      
    },
    filterButtonContainer: {
      
    },
    eventContainer: {
      flexDirection: 'row', 
      backgroundColor: 'black',
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      borderColor: '#5a49a8',
      borderRadius: 10,
      borderWidth: 1,
      margin: 5,
      shadowColor: 'black'
    },
    image: {
      flex: 1, 
      width: undefined,
      height: 100,
      resizeMode: 'cover', 
      margin: 10,
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
      color: '#beffb5',
    },
    subtitle: {
      fontSize: 12,
      marginBottom: 5, 
      color: '#3589d7',
    },
    venue: {
      fontWeight: 'bold',
      color: '#3589d7',
    },
    date: {
      fontSize: 14,
      color: '#ffffff'
    },
    cityStateContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    pageNav: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: 10,
    },
    pageNavPageNum: {
      color: '#3589d7',
    },
    textInput: {
      color: '#3589d7',
    }
  },
});

export default Events