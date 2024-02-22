import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'
import { useDarkMode } from '../DarkModeContext';
import FilterByState from './FilterByState';
import FilterByRadius from './FilterByRadius';

function EventsFilter({ filter, setFilter, postalCode, setPostalCode, radius, setRadius, stateCode, setStateCode, city, setCity }) {
  const { darkModeView } = useDarkMode();

  // useEffect(() => {
  //   console.log("Radius: ", radius)
  // })

  return (
    <ScrollView style={[styles.container, darkModeView ? styles.darkMode.container : styles.lightMode.container]}>
      <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by Event Name</Text>
      <TextInput
        placeholderTextColor={darkModeView ? '#3589d7' : '#000'}
        style={[styles.textInput, darkModeView ? styles.darkMode.textInput : styles.lightMode.textInput]}
        value={filter}
        onChangeText={setFilter}
      />
      <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by Radius</Text>

      <FilterByRadius 
        radius={radius} 
        setRadius={setRadius}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
      />
        <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by City, State</Text>
      
        <FilterByState stateCode={stateCode} setStateCode={setStateCode} city={city} setCity={setCity}/>
      
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
  textInput: {
    padding: 10,
    height: 50,
    
    borderWidth: 1,
    borderRadius: 5,
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
