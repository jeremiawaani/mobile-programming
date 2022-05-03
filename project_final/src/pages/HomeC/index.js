import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { HomeC_ContentHome, HomeF_Header } from '../../components';

const HomeC = () => {
  return (
    <View>
      {/* <Text>HomeC</Text> */}
      <HomeF_Header/>
      <HomeC_ContentHome/>
    </View>
  );
};

export default HomeC;

const styles = StyleSheet.create({});
