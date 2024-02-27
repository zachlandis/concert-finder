import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/AppNavigator';
import { DarkModeProvider } from './Context/DarkModeContext';
// Corrected imports for Firebase SDK
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Omitting direct Analytics initialization in this correction for React Native

const firebaseConfig = {
  apiKey: "AIzaSyCC1elOIjX4K156jguQ89VQ810nM6hx3OE",
  authDomain: "concert-finder-43358.firebaseapp.com",
  projectId: "concert-finder-43358",
  storageBucket: "concert-finder-43358.appspot.com",
  messagingSenderId: "96424885983",
  appId: "1:96424885983:web:20af1d9073c70cae0fb36a",
  measurementId: "G-CD9TDMZX14"
};

// Initialize Firebase only once
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Firebase Auth state change listener
onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in:', user.email);
  } else {
    console.log('No user is signed in.');
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DarkModeProvider>
          <AppNavigator />
        </DarkModeProvider>
      </NavigationContainer>
    </Provider>
  );
}
