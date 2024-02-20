import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDarkMode } from './DarkModeContext';

function EventsFilter({ filter, setFilter, postalCode, setPostalCode, radius, setRadius }) {
  const { darkModeView } = useDarkMode();

  return (
    <View style={[styles.container, darkModeView ? styles.darkMode.container : styles.lightMode.container]}>
      <TextInput
        placeholder="Search by Event Name"
        placeholderTextColor={darkModeView ? '#3589d7' : '#000'}
        style={[styles.textInput, darkModeView ? styles.darkMode.textInput : styles.lightMode.textInput]}
        value={filter}
        onChangeText={setFilter}
      />
      <View style={styles.distanceSearchContainer}>
        <TextInput
          placeholder="Zip Code"
          placeholderTextColor={darkModeView ? '#3589d7' : '#000'}
          style={[styles.zipInput, darkModeView ? styles.darkMode.zipInput : styles.lightMode.zipInput]}
          value={postalCode}
          onChangeText={setPostalCode}
        />
        <Picker
          style={styles.picker}
          selectedValue={radius}
          onValueChange={setRadius}
          mode="dropdown"
        >
          <Picker.Item label="10 miles" value="10" />
          <Picker.Item label="25 miles" value="25" />
          <Picker.Item label="50 miles" value="50" />
          <Picker.Item label="100 miles" value="100" />
          <Picker.Item label="200 miles" value="200" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
  },
  textInput: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  distanceSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  zipInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  picker: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  lightMode: {
    container: { backgroundColor: '#fff' },
    textInput: { borderColor: '#ccc', color: '#000' },
    zipInput: { borderColor: '#ccc', color: '#000' },
  },
  darkMode: {
    container: { backgroundColor: '#333' },
    textInput: { borderColor: '#888', color: '#fff' },
    zipInput: { borderColor: '#888', color: '#fff' },
  },
});

export default EventsFilter;
