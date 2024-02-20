import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import {View, Text, Image, StyleSheet, ScrollView, Button, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from './DarkModeContext';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchEDMEvents } from '../Redux/Actions/getEventsActions';


function Events() {
  // const dispatch = useDispatch();
  // const EDMEvents = useSelector((state) => state.events.events)
  const [EDMEvents, setEDMEvents] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [filter, setFilter] = useState('')
  const nav = useNavigation();
  const { darkModeView } = useDarkMode();


  // useEffect(() => {
  //   dispatch(fetchEDMEvents())
  // }, [dispatch])

  useEffect(() => {
    console.log("DarkMode from Context: ", darkModeView)
  })

  useEffect(() => {
    fetchEDMEvents(currentPage, filter)
  }, [currentPage, filter]); 
  
  const fetchEDMEvents = (page) => {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=D23kNHOosZFqS225UqGpFbM4XOqB1LsC&classificationName=Music&genreId=KnvZfZ7vAvF&sort=date,asc&page=${page}&keyword=${encodeURIComponent(filter)}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data._embedded && data._embedded.events) {
          setEDMEvents(data._embedded.events);
          setTotalPages(data.page.totalPages); 
        }
      })
      .catch(error => console.error('There was a problem fetching EDM Events', error));
  };

  const handlePageChange = (direction) => {
    const newPage = direction === '➡️' ? currentPage + 1 : currentPage - 1;
    setCurrentPage(newPage);
    fetchEDMEvents(newPage); 
  };

  const createPrettyDate = (date) => {
    const splitDate = date.split('-')
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }
  

  return (
    <View style={darkModeView ? styles.darkMode.container : styles.lightMode.container}> 
      <View style={darkModeView ? styles.darkMode.searchBar : styles.lightMode.searchBar}>
        <TextInput 
          placeholder='Search by Event Name'
          placeholderTextColor='#3589d7'
          style={darkModeView ? styles.darkMode.textInput : styles.lightMode.textInput}
          value={filter}
          onChangeText={(newText) => setFilter(newText)}
        />
      </View>
      <View style={darkModeView ? styles.darkMode.pageNav : styles.lightMode.pageNav}> 
        <Button title='⬅️' onPress={() => handlePageChange('⬅️')} />
        <Text style={darkModeView ? styles.darkMode.pageNavPageNum : styles.lightMode.pageNavPageNum}>Page: {currentPage + 1}/{totalPages}</Text>
        <Button title='➡️' onPress={() => handlePageChange('➡️')} />
      </View>
      <ScrollView style={darkModeView ? styles.darkMode.scrollView : styles.lightMode.scrollView}>
        {EDMEvents.map((e) => (
          <View style={darkModeView ? styles.darkMode.eventContainer : styles.lightMode.eventContainer} key={e.id}>
            <Image source={{ uri: e.images?.[0]?.url || 'default_image_uri' }} style={darkModeView ? styles.lightMode.image : styles.darkMode.image} />
            <View style={darkModeView ? styles.darkMode.textContainer : styles.lightMode.textContainer}>
              <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>{e.name}</Text>
              {e._embedded?.venues?.length > 0 && (
                <View>
                  <Text style={darkModeView ? styles.darkMode.venue : styles.lightMode.venue}>{e._embedded.venues[0].name}</Text>
                  <View style={darkModeView ? styles.darkMode.cityStateContainer : styles.lightMode.cityStateContainer}>
                    <Text>{e._embedded.venues[0].city?.name}, </Text>
                    <Text>{e._embedded.venues[0].state?.stateCode}</Text>
                  </View>
                </View>
              )}
              <Text style={darkModeView ? styles.darkMode.date : styles.lightMode.date}>{createPrettyDate(e.dates.start.localDate)}</Text>
            </View>
            <View>
            <Button
              title='See More'
              onPress={() => nav.navigate('EventPage', { eventDetails: e })}
            />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  lightMode: {
    container: {
      flex: 1,
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
      backgroundColor: 'black',
    },
    scrollView: {
      
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
    searchBar: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#424242',
      borderColor: '#424242',
      height: 40,
      borderWidth: 1,
      margin: 20,
    },  
    textInput: {
      color: '#3589d7',
    }
  },
});

export default Events