import React, { useEffect } from 'react'
import {View, Text, StyleSheet, ScrollView, Button, Linking} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDarkMode } from '../Context/DarkModeContext';

function EventProducts({ eventDetails, onHandlePress }) {
    const nav = useNavigation();
    const { darkModeView } = useDarkMode();

    return (
       
       <View style={darkModeView ? styles.darkMode.container : styles.lightMode.container}>
          {eventDetails.products.map((product, index) => (
            <ScrollView key={index} style={darkModeView ? styles.darkMode.productItem : styles.lightMode.productItem}>
              <Text style={darkModeView ? styles.darkMode.text : styles.lightMode.text}>{product.name}</Text>
              <Button title="Buy Now" onPress={() => onHandlePress(product.url)}/>
            </ScrollView>
          ))}
        </View>
      );
    };

export default EventProducts

const styles = StyleSheet.create({
    lightMode: {
        container: {
            padding: 5,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 25,
        },
        text: {
            fontSize: 16,
        },
        productItem: {
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 5,
        }
    },
    darkMode: {
        container: {
            padding: 5,
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 25,
        },
        text: {
            fontSize: 16,
            color: '#fff'
        },
        productItem: {
            borderColor: '#5a49a8',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 5,
        }
    }
})