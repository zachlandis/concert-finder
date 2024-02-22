import React, { useEffect } from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useDarkMode } from '../DarkModeContext';

function FilterByState({stateCode, setStateCode, city, setCity}) {

    useEffect(() => {
        console.log(city)
    })

    const { darkModeView } = useDarkMode();
    const data = [
        { label: 'AL', value: 'AL' }, // Alabama
        { label: 'AK', value: 'AK' }, // Alaska
        { label: 'AZ', value: 'AZ' }, // Arizona
        { label: 'AR', value: 'AR' }, // Arkansas
        { label: 'CA', value: 'CA' }, // California
        { label: 'CO', value: 'CO' }, // Colorado
        { label: 'CT', value: 'CT' }, // Connecticut
        { label: 'DE', value: 'DE' }, // Delaware
        { label: 'FL', value: 'FL' }, // Florida
        { label: 'GA', value: 'GA' }, // Georgia
        { label: 'HI', value: 'HI' }, // Hawaii
        { label: 'ID', value: 'ID' }, // Idaho
        { label: 'IL', value: 'IL' }, // Illinois
        { label: 'IN', value: 'IN' }, // Indiana
        { label: 'IA', value: 'IA' }, // Iowa
        { label: 'KS', value: 'KS' }, // Kansas
        { label: 'KY', value: 'KY' }, // Kentucky
        { label: 'LA', value: 'LA' }, // Louisiana
        { label: 'ME', value: 'ME' }, // Maine
        { label: 'MD', value: 'MD' }, // Maryland
        { label: 'MA', value: 'MA' }, // Massachusetts
        { label: 'MI', value: 'MI' }, // Michigan
        { label: 'MN', value: 'MN' }, // Minnesota
        { label: 'MS', value: 'MS' }, // Mississippi
        { label: 'MO', value: 'MO' }, // Missouri
        { label: 'MT', value: 'MT' }, // Montana
        { label: 'NE', value: 'NE' }, // Nebraska
        { label: 'NV', value: 'NV' }, // Nevada
        { label: 'NH', value: 'NH' }, // New Hampshire
        { label: 'NJ', value: 'NJ' }, // New Jersey
        { label: 'NM', value: 'NM' }, // New Mexico
        { label: 'NY', value: 'NY' }, // New York
        { label: 'NC', value: 'NC' }, // North Carolina
        { label: 'ND', value: 'ND' }, // North Dakota
        { label: 'OH', value: 'OH' }, // Ohio
        { label: 'OK', value: 'OK' }, // Oklahoma
        { label: 'OR', value: 'OR' }, // Oregon
        { label: 'PA', value: 'PA' }, // Pennsylvania
        { label: 'RI', value: 'RI' }, // Rhode Island
        { label: 'SC', value: 'SC' }, // South Carolina
        { label: 'SD', value: 'SD' }, // South Dakota
        { label: 'TN', value: 'TN' }, // Tennessee
        { label: 'TX', value: 'TX' }, // Texas
        { label: 'UT', value: 'UT' }, // Utah
        { label: 'VT', value: 'VT' }, // Vermont
        { label: 'VA', value: 'VA' }, // Virginia
        { label: 'WA', value: 'WA' }, // Washington
        { label: 'WV', value: 'WV' }, // West Virginia
        { label: 'WI', value: 'WI' }, // Wisconsin
        { label: 'WY', value: 'WY' }  // Wyoming
    ];
    
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
        data={data}
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