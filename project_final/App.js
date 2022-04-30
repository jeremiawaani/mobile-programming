import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DetailsU_Bar,
  DetailsU_Header,
  Footer,
  HeaderUser,
  SignUpF_Header,
  SignUpF_TextInput,
} from './src/components';
import SelectUser from './src/pages/SelectUser';
import HomeF from './src/pages/HomeF';
import BorderUser from './src/components/SelectUser_border';
const App = () => {
  return (
    <View>
      <SignUpF_TextInput title={'Name'} placeholder={'Name'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
