import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Events() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Events</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Events