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
import {DetailsF, HomeF, SelectUser} from './src';
import BorderUser from './src/components/SelectUser_border';
import SplashScreen from './src/pages/SplashScreen';
import HomeF_Header from './src/components/HomeF_Header';
import HomeF_ContentEarnings from './src/components/HomeF_ContentEarnings';
import HomeF_ContentJobCat from './src/components/HomeF_ContentJobCat';
const App = () => {
  return (
    <View>
      {/* <SelectUser/> */}
      {/* <SplashScreen/> */}
     {/* <HomeF_Header/> */}
     <HomeF_ContentJobCat/>
      {/* <HomeF/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
