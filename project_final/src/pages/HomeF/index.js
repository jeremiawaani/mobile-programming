import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Footer,
  Gap,
  HomeF_ContentEarnings,
  HomeF_ContentJobCat,
  HomeF_Header,
} from '../../components';

const HomeF = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <HomeF_Header />
      <Gap height={8} />
      <HomeF_ContentEarnings onPress={() => navigation.navigate('ProjectF')} />
      <Gap height={15} />
      <HomeF_ContentJobCat />
      <Footer />
    </View>
  );
};

export default HomeF;

const styles = StyleSheet.create({});
