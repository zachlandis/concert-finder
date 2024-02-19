import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import {View, Text, Image, StyleSheet, ScrollView, Button, TextInput} from 'react-native'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchEDMEvents } from '../Redux/Actions/getEventsActions';


function Events() {
  // const dispatch = useDispatch();
  // const EDMEvents = useSelector((state) => state.events.events)
  const [EDMEvents, setEDMEvents] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [filter, setFilter] = useState('')

  // useEffect(() => {
  //   dispatch(fetchEDMEvents())
  // }, [dispatch])

  // useEffect(() => {
  //   console.log(EDMEvents)
  // })

  useEffect(() => {
    fetchEDMEvents(currentPage)
  }, []); 
  
  const fetchEDMEvents = (page) => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=D23kNHOosZFqS225UqGpFbM4XOqB1LsC&classificationName=Music&genreId=KnvZfZ7vAvF&sort=date,asc&page=${page}`)
      .then(response => response.json())
      .then(data => {
        if(data._embedded && data._embedded.events) {
          setEDMEvents(data._embedded.events);
          setTotalPages(data.page.totalPages); 
        }
      })
      .catch(error => console.error('There was a problem fetching EDM Events', error));
  };

  const filteredEDMEvents = EDMEvents.filter(event => 
    event.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  

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
    <View style={styles.container}> 
      <View style={styles.searchBar}>
        <TextInput 
          placeholder='Search by Event Name'
          value={filter}
          onChangeText={(newText) => setFilter(newText)}
        />
      </View>
      <View style={styles.pageNav}> 
        <Button title='⬅️' onPress={() => handlePageChange('⬅️')} />
        <Text>Page: {currentPage + 1}/{totalPages}</Text>
        <Button title='➡️' onPress={() => handlePageChange('➡️')} />
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredEDMEvents.map((e) => (
          <View style={styles.eventContainer} key={e.id}>
            <Image source={{ uri: e.images?.[0]?.url || 'default_image_uri' }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{e.name}</Text>
              {e._embedded?.venues?.length > 0 && (
                <View>
                  <Text style={styles.venue}>{e._embedded.venues[0].name}</Text>
                  <View style={styles.cityStateContainer}>
                    <Text>{e._embedded.venues[0].city?.name}, </Text>
                    <Text>{e._embedded.venues[0].state?.stateCode}</Text>
                  </View>
                </View>
              )}
              <Text style={styles.date}>{createPrettyDate(e.dates.start.localDate)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    // flex: 1,
  },
  eventContainer: {
    flexDirection: 'row', 
    backgroundColor: 'pink',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
  image: {
    flex: 1, 
    width: undefined,
    height: 100,
    resizeMode: 'cover', 
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
  },
  searchBar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    height: 40,
    borderWidth: 1,
    margin: 20,
  },  
});

export default Events