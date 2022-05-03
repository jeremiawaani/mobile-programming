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
import {
  DetailsF,
  HomeF,
  SelectUser,
  ProfileF,
  ProfileC,
  SearchJob,
  PendingProjectF_Header,
  PendingProjectF_Content,
  PendingProjectF_JobDetails,
<<<<<<< HEAD
  PendingProjectF_Bottom,
=======
  HomeC
>>>>>>> 3e9d137918f660a05391640f7e5112e224092dc0
} from './src';
import BorderUser from './src/components/SelectUser_border';
import SplashScreen from './src/pages/SplashScreen';
import HomeF_Header from './src/components/HomeF_Header';
import HomeF_ContentEarnings from './src/components/HomeF_ContentEarnings';
import HomeF_ContentJobCat from './src/components/HomeF_ContentJobCat';
import { ProfileC_Top } from './src';
const App = () => {
  return (
    <View>
      {/* <SelectUser/> */}
      {/* <SplashScreen/> */}
<<<<<<< HEAD
      {/* <HomeF_Header/> */}
      {/* <HomeF_ContentJobCat/> */}
      {/* <HomeF /> */}
      <PendingProjectF_Bottom />
=======
     {/* <HomeF_Header/> */}
     {/* <HomeF_ContentJobCat/> */}
      <HomeC/>
>>>>>>> 3e9d137918f660a05391640f7e5112e224092dc0
      {/* <ProfileF /> */}
      {/* <ProfileC_Top/> */}
      {/* <SearchJob /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
