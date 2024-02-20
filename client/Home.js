import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from './DarkModeContext';

function Home() {
    const nav = useNavigation();
    const { darkModeView, toggleDarkMode } = useDarkMode();

    return (
        <View style={darkModeView ? styles.darkMode.container : styles.lightMode.container }>
            <Text style={darkModeView ? styles.darkMode.title : styles.lightMode.title}>Home</Text>
            <Button title='Logout' onPress={() => nav.navigate('Login')} />
            <Button title='Dark Mode' onPress={toggleDarkMode} />
        </View>
    );
}

const styles = StyleSheet.create({
    lightMode: {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            color: '#000',
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    darkMode: {
        container: {
            flex: 1,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 'bold',
        }
    }
});

export default Home;
