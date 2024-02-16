import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Button title='Login' onPress={() => nav.navigate('Main')}/>
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

export default Login