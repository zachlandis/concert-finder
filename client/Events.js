import React, { useEffect, useState } from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchEDMEvents } from '../Redux/Actions/getEventsActions';


function Events() {
  // const dispatch = useDispatch();
  // const EDMEvents = useSelector((state) => state.events.events)
  const [EDMEvents, setEDMEvents] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchEDMEvents())
  // }, [dispatch])

  // useEffect(() => {
  //   console.log(EDMEvents)
  // })

  useEffect(() => {
    const currentPage = 1;
    const resultsPerPage = 10;
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=D23kNHOosZFqS225UqGpFbM4XOqB1LsC&classificationName=Music&genreId=KnvZfZ7vAvF&number=${resultsPerPage}&offset=${(currentPage - 1) * resultsPerPage}`)
    .then(response => response.json())
    .then(data => {
      if(data._embedded && data._embedded.events) {
        setEDMEvents(data._embedded.events);
      }
    })
    .catch(error => console.error('There was a problem fetching EDM Events', error));
  }, []); 
  

  

  return (
    <ScrollView style={styles.scrollView}>
      {EDMEvents.map((e) => (
        <View style={styles.eventContainer} key={e.id}>
          <Image source={{ uri: e.images[0].url }} style={styles.image}/>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{e.name}</Text>
            <Text style={styles.date}>{e.dates.start.localDate}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
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
  date: {
    fontSize: 14,
  },
});

export default Events