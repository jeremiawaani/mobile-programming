import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Footer, HeaderUser} from './src/components';

const App = () => {
  return (
    <View>
      <HeaderUser title={'My Profile'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
