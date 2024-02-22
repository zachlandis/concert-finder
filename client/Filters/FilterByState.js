import React, { useEffect } from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useDarkMode } from '../DarkModeContext';
import { stateDropdown } from '../dropdownData.js/stateDropdown';

function FilterByState({stateCode, setStateCode, city, setCity}) {

    // useEffect(() => {
    //     console.log(city)
    // })

    const { darkModeView } = useDarkMode();
    
  return (
     <View style={styles.container}>
      <TextInput 
        placeholder="City"
        placeholderTextColor={darkModeView ? '#3589d7' : '#000'}
        style={styles.cityInput}
        value={city}
        onChangeText={setCity}
        />
      <Dropdown
        style={styles.dropdown}
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
  dropdown: {
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
});