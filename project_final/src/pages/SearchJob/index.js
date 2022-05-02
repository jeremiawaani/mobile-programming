import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Footer, Gap, HeaderUser, Profile_Button } from '../../components';

const SearchJob = () => {
  return (
    <View>
      <HeaderUser title='Search Job' />
      <View style={{alignItems: 'center'}}>
      <Profile_Button width={293} height={100} color='#E2D4FE' />
      <Gap height={20} />
      <Profile_Button width={293} height={100} color='#D1FBEA' />
      <Gap height={20} />
      <Profile_Button width={293} height={100} color='#D2F5FD' />
      <Gap height={20} />
      <Profile_Button width={293} height={100} color='#E2D4FE' />
      <Gap height={20} />
      </View>
      <Footer />
    </View>
  );
};

export default SearchJob;

const styles = StyleSheet.create({});
