import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { useDarkMode } from '../DarkModeContext'

function FilterByName({ filter, setFilter }) {

    const {darkModeView} = useDarkMode();
    
  return (
    <TextInput
        placeholder='Event Name'
        placeholderTextColor={darkModeView ? '#3589d7' : '#000'}
        style={[styles.textInput, darkModeView ? styles.darkMode.textInput : styles.lightMode.textInput]}
        value={filter}
        onChangeText={setFilter}
      />
  )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
      },
      lightMode: {
        textInput: { borderColor: '#ccc', color: '#000' },
      },
      darkMode: {
        textInput: { borderColor: '#888', color: '#fff' },
      },
})

export default FilterByName