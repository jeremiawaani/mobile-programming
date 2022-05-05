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
  CurrentProjectF_Header,
  CurrentProjectF_Content,
  CurrentProjectF_JobDetails,
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
  PendingProjectF_Bottom,
  PendingProjectF,
  SignUpF,
  ProjectF,
  HomeC,
} from './src';
import BorderUser from './src/components/SelectUser_border';
import SplashScreen from './src/pages/SplashScreen';
import HomeF_Header from './src/components/HomeF_Header';
import HomeF_ContentEarnings from './src/components/HomeF_ContentEarnings';
import HomeF_ContentJobCat from './src/components/HomeF_ContentJobCat';
import {ProfileC_Top} from './src';
import LoginF from './src/pages/LoginF';
const App = () => {
  return (
    <View>
      <CurrentProjectF_JobDetails />

      {/* Tes */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
