import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useDarkMode } from '../DarkModeContext';

function FilterByRadius({radius, setRadius, postalCode, setPostalCode}) {
    const { darkModeView } = useDarkMode();

    const radiusData = [
        {label: '10 miles', value: '10'},
        {label: '25 miles', value: '25'},
        {label: '50 miles', value: '50'},
        {label: '100 miles', value: '100'},
        {label: '500 miles', value: '500'},
      ]

  return (
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
  )
}

const styles = StyleSheet.create({
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
            zipInput: { borderColor: '#ccc', color: '#000' },
        },
        darkMode: {
            zipInput: { borderColor: '#888', color: '#fff' },
        },
})

export default FilterByRadius