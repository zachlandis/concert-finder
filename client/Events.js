import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
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

  useEffect((currentPage = 1, resultsPerPage =  10) => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=D23kNHOosZFqS225UqGpFbM4XOqB1LsC&classificationName=Music&genreId=KnvZfZ7vAvF&number=${resultsPerPage}&offset=${(currentPage - 1) * resultsPerPage}`)
    .then(r => r.json())
    .then(events => setEDMEvents(events._embedded.events))
  })

  

  return (
    <ScrollView>
        {EDMEvents.map((e) => (
        <View style={styles.container}>
          <Text style={styles.title}>{e.name}</Text>
          <Text style={styles.title}>{e.dates.start.localDate}</Text>
        </View>
    ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Events