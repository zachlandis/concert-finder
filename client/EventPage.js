import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

function EventPage({ route }) {

  const { eventDetails } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: eventDetails.images?.[0]?.url}} />
        <Text style={styles.title}>{eventDetails.name}</Text>        
    </View>
  )
}

export default EventPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    
  },
  image: {
    flex: 1, 
    height: 10,
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
})