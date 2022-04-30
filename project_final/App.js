import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DetailsU_Bar,
  DetailsU_Header,
  Footer,
  HeaderUser,
} from './src/components';
import SelectUser from './src/pages/SelectUser';
import HomeF from './src/pages/HomeF';
import BorderUser from './src/components/SelectUser_border';
import SignUpFHeader from './src/components/SignUpF_Header';
const App = () => {
  return (
    <View>
      <SignUpFHeader />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
