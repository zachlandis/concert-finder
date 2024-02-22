import React, { useEffect } from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useDarkMode } from '../DarkModeContext';
import { stateDropdown, countryDropdown } from '../dropdownData.js/locationsDropdown';

function FilterByState({countryCode, setCountryCode, stateCode, setStateCode, city, setCity}) {

    // useEffect(() => {
    //     console.log(countryCode)
    // })

    const { darkModeView } = useDarkMode();
    
  return (
     <View>
     <View style={styles.container}>
      <TextInput 
        placeholder="City"
        placeholderTextColor={darkModeView ? '#3589d7' : '#000'}
        style={styles.cityInput}
        value={city}
        onChangeText={setCity}
        />
      <Dropdown
        style={styles.partialRowDropdown}
        data={stateDropdown}
        value={stateCode}
        onChange={(item) => {
          setStateCode(item.value);
        }}
        labelField="label"
        valueField="value"
        selectedTextStyle={{ color: darkModeView ? '#3589d7' : '#000' }}
        placeholder='State'
        placeholderStyle={{ color: darkModeView ? '#3589d7' : '#000' }}
      />
    </View>
      <Dropdown
        style={styles.fullRowDropdown}
        data={countryDropdown}
        value={countryCode}
        onChange={(item) => {
          setCountryCode(item.value);
        }}
        labelField="label"
        valueField="value"
        selectedTextStyle={{ color: darkModeView ? '#3589d7' : '#000' }}
        placeholder='Country'
        placeholderStyle={{ color: darkModeView ? '#3589d7' : '#000' }}
      />
    </View>
  );
}

export default FilterByState;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  cityInput: {
    flex: 2,
    height: 50,
    width: 150,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    color: '#3589d7',
  },
  partialRowDropdown: {
    flex: 1,
    height: 50,
    width: 150,
    marginLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#3589d7',
  },
  fullRowDropdown: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#3589d7',
    marginBottom: 10,
  }
});