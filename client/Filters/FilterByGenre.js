import React from 'react'
import { StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { genreDropdown } from '../dropdownData.js/genreDropdown';
import { useDarkMode } from '../DarkModeContext'

function FilterByGenre({genre, setGenre}) {

    const { darkModeView } = useDarkMode();

  return (
    <Dropdown 
        style={styles.dropdown}
        data={genreDropdown}
        value={genre}
        onChange={(item) => {
            setGenre(item.value)
        }}
        labelField="label"
        valueField="value"
        selectedTextStyle={{ color: darkModeView ? '#3589d7' : '#000' }}  
        placeholder='Genre'
        placeholderStyle={{ color: darkModeView ? '#3589d7' : '#000' }}
    />

  )
}

const styles = StyleSheet.create({
    dropdown: {
        padding: 10,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
      },
      lightMode: {
        textInput: { borderColor: '#ccc', color: '#000' },
      },
      darkMode: {
        textInput: { borderColor: '#888', color: '#fff' },
      },
})

export default FilterByGenre