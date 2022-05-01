import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DetailsF_BarDesc,
  DetailsF_Header,
  DetailsU_Bar,
  DetailsU_Header,
  Footer,
  HeaderUser,
  SignUpF_Button,
  SignUpF_Footer,
  SignUpF_Header,
  SignUpF_TextInput,
  DetailsF_BarSkill,
  DetailsF_BarClient,
  DetailsF_BarEmail,
  DetailsF_Content,
} from './src/components';
import {DetailsF, SelectUser} from './src';
import BorderUser from './src/components/SelectUser_border';
const App = () => {
  return (
    <View>
      {/* <DetailsF /> */}
      {/* <BorderUser/> */}
      <SelectUser/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
