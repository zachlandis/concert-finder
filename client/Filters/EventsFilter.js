import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { useDarkMode } from '../Context/DarkModeContext';
import FilterByState from './FilterByState';
import FilterByRadius from './FilterByRadius';
import FilterByName from './FilterByName';
import FilterByGenre from './FilterByGenre';

function EventsFilter({ filter, setFilter, postalCode, setPostalCode, radius, setRadius, countryCode, setCountryCode, stateCode, setStateCode, city, setCity, genre, setGenre }) {
  const { darkModeView } = useDarkMode();

  return (
    <ScrollView style={[styles.container, darkModeView ? styles.darkMode.container : styles.lightMode.container]}>
      
      <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by Event Name</Text>
      <FilterByName 
        filter={filter} 
        setFilter={setFilter}
      />

      {/* <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by Radius</Text>
      <FilterByRadius 
        radius={radius} 
        setRadius={setRadius}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
      /> */}
      
      <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by Location</Text>
      <FilterByState 
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        stateCode={stateCode} 
        setStateCode={setStateCode} 
        city={city} 
        setCity={setCity}
      />

      <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by Genre</Text>
      <FilterByGenre 
        genre={genre}
        setGenre={setGenre}
      />
      

    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  lightMode: {
    container: { backgroundColor: '#fff' },
    title: {color: '#000'},
    textInput: { borderColor: '#ccc', color: '#000' },
    zipInput: { borderColor: '#ccc', color: '#000' },
  },
  darkMode: {
    container: { backgroundColor: '#333' },
    title: {color: '#beffb5'},
    textInput: { borderColor: '#888', color: '#fff' },
    zipInput: { borderColor: '#888', color: '#fff' },
  },
});

export default EventsFilter;
