import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  SplashScreen,
  SignIn,
  SignUp,
  CashOnBank,
  CashOnHand,
} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers';
import Home from './src/pages/Home';
import {Profile} from './assets';
import {ListTransaction} from './src/components';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Routers />
    // </NavigationContainer>
    <Home />
  );
};

export default App;

const styles = StyleSheet.create({});
