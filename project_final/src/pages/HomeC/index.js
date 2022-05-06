import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Footer, Gap, HomeC_ContentHome, HomeF_Header } from '../../components';
import { Add, AddTabBottom, Present, ProjectList } from '../../../assets';

const HomeC = () => {
  return (
    <View>
      {/* <Text>HomeC</Text> */}
      <HomeF_Header/>
      <HomeC_ContentHome title={"Add Job"} subtitle={"12 Job Complete"} icons={<Add/>} marginL={92}/>
      <HomeC_ContentHome title={"My Projects"} subtitle={"12 Projects Complete"} icons={<ProjectList/>} backgroundColor={'#D2F5FD'} marginL={67}/>
      <HomeC_ContentHome title={"Add Job"} subtitle={"12 Pending Projects"} icons={<Present/>} backgroundColor={'#E2D4FE'} marginL={75}/>
      <Gap height={22}/>
      <Footer search={<AddTabBottom/>}/>
    </View>
  );
};

export default HomeC;

const styles = StyleSheet.create({});
