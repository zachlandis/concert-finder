import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown'
import { useDarkMode } from '../DarkModeContext';
import FilterByState from './FilterByState';

function EventsFilter({ filter, setFilter, postalCode, setPostalCode, radius, setRadius, stateCode, setStateCode, city, setCity }) {
  const { darkModeView } = useDarkMode();

  // useEffect(() => {
  //   console.log("Radius: ", radius)
  // })

  const radiusData = [
    {label: '10 miles', value: '10'},
    {label: '25 miles', value: '25'},
    {label: '50 miles', value: '50'},
    {label: '100 miles', value: '100'},
    {label: '500 miles', value: '500'},
  ]


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
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Zip Code"
          placeholderTextColor={darkModeView ? '#3589d7' : '#000'}
          style={[styles.zipInput, darkModeView ? styles.darkMode.zipInput : styles.lightMode.zipInput]}
          value={postalCode}
          onChangeText={setPostalCode}
        />
        <Dropdown
          style={styles.dropdown}
          data={radiusData}
          value={radius}
          onChange={(item) => {
            setRadius(item.value);
          }}
          labelField="label"
          valueField="value"
          selectedTextStyle={{ color: darkModeView ? '#3589d7' : '#000' }}
          placeholder='Radius'
          placeholderStyle={{ color: darkModeView ? '#3589d7' : '#000' }}
        />
      </View>
        <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Search by City, State</Text>
      <View>
        <FilterByState stateCode={stateCode} setStateCode={setStateCode} city={city} setCity={setCity}/>
      </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  zipInput: {
    flex: 2,
    height: 50,
    width: 150,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdown: {
    flex: 1,
    height: 50,
    width: 150,
    marginLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
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
